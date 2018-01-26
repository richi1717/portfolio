import React from 'react';
import { Link } from 'react-router-dom';
import dispatch from '../dispatch';

export default function Header() {
  return (
    <header className="portfolio-header">
      <h1 className="portfolio-header-content">
        <Link to="/" onClick={() => dispatch({ type: 'HIDE_CONTENT' })}>
          Richi Jeffery
        </Link>
      </h1>
    </header>
  );
}
