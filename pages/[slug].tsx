import * as React from 'react';
import renderHTML from 'html-react-parser';
export interface ArticleDetailProps {
  article: any;
}

export default function ArticleDetail(props: ArticleDetailProps) {
  const { article } = props;
  return <div>{renderHTML(article.article_content)}</div>;
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:5000/api/article?page=1limit=10');
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
  const res = await fetch(`http://localhost:5000/api/article/${params.slug}`);
  const article = await res.json();

  // Pass post data to the page via props
  return { props: { article: article.article } };
}
