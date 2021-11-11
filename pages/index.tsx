import { ArticleItem, Header } from '@/components/common';
import Footer from '@/components/common/footer';
import { SlidePost } from '@/components/home';
import { TopView } from '@/components/home/topView';
import type { NextPage } from 'next';

const Home: NextPage = ({ article }: any) => {
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
            {article?.data.map((item: any, index: number) => {
              return <ArticleItem article={item} key={index} />;
            })}
          </div>
          <div className="col-xl-4">
            <TopView data={article} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const res = await fetch('http://localhost:5000/api/article?page=1limit=10');
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
}
export default Home;
