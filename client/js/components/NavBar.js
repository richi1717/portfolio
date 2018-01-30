import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  handleClick() {
    const { history, contentType } = this.props;

    history.push(`/${contentType}`);
  }

  render() {
    const navItems = ['About', 'Skills', 'Work', 'Demo', 'Projects', 'References', 'Contact', 'Education', 'Military'];

    return (
      <div className="portfolio-nav-bar-container">
        {navItems.map((name, idx) => {
          const location = name.toLowerCase();
          const selected = `/${location}` === window.location.pathname;
          return (
            <Link
              key={idx}
              className={`portfolio-nav-bar-items ${selected && 'selected'}`}
              to={`/${location}`}
            >
              {name}
              {selected && <span className="portfolio-nav-bar-selected-border" />}
            </Link>
          );
        })}
      </div>
    )
  }
}
