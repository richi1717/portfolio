import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../../sass/style.scss';

export default function App({ children }) {
  return (
    <div className="portfolio-main-container">
      {window.location.pathname !== '/' && <Header />}
      {children}
      {window.location.pathname !== '/' && <Footer />}
    </div>
  );
}
