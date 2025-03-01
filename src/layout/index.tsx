import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import Motion from './motion';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Motion>
      <Header />
      {children}
      <Footer />
    </Motion>
  );
}

export default Layout;
