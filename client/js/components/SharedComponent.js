import React, { Component } from 'react';
import * as config from '../constants/config';
import dispatch from '../dispatch';

export default class SharedComponent extends Component {
  handleClick() {
    const { history, contentType } = this.props;

    dispatch({
      type: 'SET_CONTENT',
      content: config[contentType].content
    });

    history.push('/content');
  }

  render() {
    const { tileClasses, children, contentType } = this.props;

    return (
      <div
        className={tileClasses}
        onClick={() => contentType && this.handleClick()}
      >
        {children}
      </div>
    )
  }
}