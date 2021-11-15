import { ArticleItem } from '@/components/common';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';

export interface CategoryProps {
  data: any;
  pagination: any;
}

export default function Category(props: CategoryProps) {
  const router = useRouter();
  const { data, pagination } = props;
  const [article, setArtile] = useState(data);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://article01.herokuapp.com/api/article?page=${page + 1}&limit=10&tag=${
          router.query.slug
        }`
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            {article.map((item: any, index: number) => {
              return <ArticleItem article={item} key={index} />;
            })}
            {page < Math.ceil(pagination._total / pagination._limit) && (
              <button className="button-loading" onClick={loadMore}>
                Xem thêm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  console.log(params);
  // `getStaticProps` is executed on the server side.
  const res = await fetch(`${process.env.API_URL}/api/article?page=1&limit=10&tag=${params.slug}`);
  const article = await res.json();
  return {
    props: {
      data: article.data,
      pagination: article.pagination,
    },
    revalidate: 1,
  };
}
