import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
