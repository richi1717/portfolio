import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="portfolio-header">
      <h1 className="portfolio-content">
        <Link to="/">HOME!</Link>
      </h1>
    </header>
  );
}
