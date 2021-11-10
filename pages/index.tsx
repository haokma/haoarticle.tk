import { ArticleItem, Header } from '@/components/common';
import Footer from '@/components/common/footer';
import { SlidePost } from '@/components/home';
import { TopView } from '@/components/home/topView';
import type { NextPage } from 'next';
import useSWR from 'swr';
import { GetStaticProps } from 'next';
import { articleApi } from '../api-client';

const Home: NextPage = () => {
  const { data } = useSWR('/article');
  console.log(data);
  return (
    <div className="main">
      <Header />
      <div className="home-page">
        <SlidePost />
      </div>
      <div
        className="container"
        style={{
          marginTop: '4rem',
        }}
      >
        <div className="row">
          <div className="col-xl-8">
            {data?.data.map((article: any, index: number) => {
              return <ArticleItem article={article} key={index} />;
            })}
          </div>
          <div className="col-xl-4">
            <TopView data={data} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
