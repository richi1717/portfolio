import React, { Component } from 'react';
import Arrangement from './Arrangement';

import '../../sass/style.scss';

export default class App extends Component {
  render() {
    console.log('finally');
    return (
      <div>
        <Arrangement />
      </div>
    );
  }
}
