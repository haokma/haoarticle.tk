import { TopView } from '@/components/home/topView';
import * as React from 'react';
import { Header } from '..';
import Footer from '../footer';

export interface LayoutProps {
  children: any;
  data: any;
}

export function Layout(props: LayoutProps) {
  const { children, data } = props;
  return (
    <>
      <Header />
      <div className="home">
        <div className="container">{children}</div>
      </div>

      <Footer />
    </>
  );
}
