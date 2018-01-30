import React, { Component } from 'react';

export default class SharedComponent extends Component {
  handleClick() {
    const { history, contentType } = this.props;

    history.push(`/${contentType.toLowerCase()}`);
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