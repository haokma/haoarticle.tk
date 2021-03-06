import * as React from 'react';
import renderHTML from 'html-react-parser';
import Link from 'next/link';
import Head from 'next/head';
export interface ArticleDetailProps {
  article: any;
}

export default function ArticleDetail(props: ArticleDetailProps) {
  const { article } = props;
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
      <div className="article-detail">
        <div className="row">
          <div className="col-xl-8  mr-auto">
            <div>{renderHTML(article.article_content)}</div>
            <div className="footer">
              <span>Bài viết này được lấy từ nguồn:</span>
              <Link href={`${article.article_source_link}`}>
                <a>
                  <span className="source_name">{article.article_source.source_name}</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.API_URL}/api/article?page=1&limit=10000`);
  const article = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = article.data.map((article: any) => ({
    params: { slug: article.article_slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.API_URL}/api/article/${params.slug}`);
  const article = await res.json();

  // Pass post data to the page via props
  return { props: { article: article.article }, revalidate: 1 };
}
