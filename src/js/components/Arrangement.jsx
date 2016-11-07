import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Name from './Name';
import Skills from './Skills';
import Urls from './Urls';
import History from './History';
import Work from './Work';
import Projects from './Projects';

import '../../sass/style.scss';

export default class Arrangement extends Component {
  render() {
    return (
      <div className="arrangement">
        <div className="column left">
        <Name />
        <div className="sub-container">
          <Skills />
          <Urls />
        </div>
        </div>
        <div className="column right">
          <AboutMe />
          <History />
          <Work />
          <Projects />
        </div>
      </div>
    );
  }
}
