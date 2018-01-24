import React, { Component } from 'react';
import Header from './Header';

import '../../sass/style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.state.showHeader && <Header />}
        {this.props.children}
      </div>
    );
  }
}
