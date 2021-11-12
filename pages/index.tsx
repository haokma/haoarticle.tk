import { ArticleItem } from '@/components/common';
import { SlidePost } from '@/components/home';
import { TopView } from '@/components/home/topView';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
const Home: NextPage = ({ data, pagination }: any) => {
  const [article, setArtile] = useState(data);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.API_URL}/api/article?page=${page + 1}&limit=10`);
      const articleData = await res.json();
      setArtile([...article, ...articleData.data]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Chia sẻ kiến thức về lập trình và An toàn thông tin" />
        <meta property="og:title" content={`Lập trình và An toàn thông tin | ${'KmaIT.tk'}`} />
        <meta
          property="og:description"
          content="Blog chia sẻ kiến thức Lập trình và An toàn thông tin"
        />
        <meta property="og:type" content="webiste" />
        <meta property="og:image" content={`${'https://www.kmait.tk/'}static/images/haolux.jpg`} />
        <meta
          property="og:image:secure_url"
          content={`${'https://www.kmait.tk/'}static/images/haolux.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <title>KmaIT - Lập trình & An Toàn Thông Tin Blog</title>
      </Head>
      <div className="main">
        <div className="home-page">
          <div
            style={{
              marginTop: '4rem',
            }}
          >
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <SlidePost />
                {article.map((item: any, index: number) => {
                  return <ArticleItem article={item} key={index} />;
                })}
                {page < Math.ceil(pagination._total / pagination._limit) && (
                  <button className="button-loading" onClick={loadMore}>
                    Xem thêm
                  </button>
                )}
              </div>
              <div className="col-xl-4 col-lg-4">
                <TopView data={article} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const res = await fetch(`${process.env.API_URL}/api/article?page=1&limit=10`);
  const article = await res.json();
  return {
    props: {
      data: article.data,
      pagination: article.pagination,
    },
    revalidate: 1,
  };
}
export default Home;
