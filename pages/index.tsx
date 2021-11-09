import { Header } from '@/components/common';
import Footer from '@/components/common/footer';
import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <div className="main">
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
