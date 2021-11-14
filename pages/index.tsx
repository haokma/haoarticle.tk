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
      const res = await fetch(
        `https://article01.herokuapp.com/api/article?page=${page + 1}&limit=10`
      );
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
        <meta
          name="description"
          content="Baovietnam.tk - Trang chuyên tổng hợp những bài viết tin tức mới nhất trong nước và quốc tế"
        />
        <meta
          property="og:title"
          content="Baovietnam.tk - Trang chuyên tổng hợp những bài viết tin tức mới nhất trong nước và quốc tế"
        />
        <meta
          property="og:description"
          content="Baovietnam.tk là website tin tức chuyên tổng hợp từ các website khác nhau về nghành công nghệ thông tin, website không mang tính thương mại , website luôn ghi rõ nguồn bài viết và tôn trọng tác quyền các bài viết đó"
        />
        <meta property="og:type" content="webiste" />
        <meta
          property="og:image"
          content={`https://microvn.net/_next/image?url=https://service.microvn.net/content/images/2021/11/ddn2714-crop-1635936936205.jpeg&w=1040&q=80`}
        />
        <meta
          property="og:image:secure_url"
          content={`https://microvn.net/_next/image?url=https://service.microvn.net/content/images/2021/11/ddn2714-crop-1635936936205.jpeg&w=1040&q=80`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <title>Baovietnam - Trang tin tức 24/7</title>
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
