import { ArticleItem, Header } from '@/components/common';
import Footer from '@/components/common/footer';
import { SlidePost } from '@/components/home';
import { TopView } from '@/components/home/topView';
import type { NextPage } from 'next';
const Home: NextPage = () => {
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
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
          </div>
          <div className="col-xl-4">
            <TopView />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
