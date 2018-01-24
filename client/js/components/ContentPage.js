import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContentPage extends Component {
  render() {
    return (
      <div
        className="overlay-container"
        onClick={() => this.props.history.push('/')}
      >
        {this.props.state.content}
      </div>
    );
  }
}

ContentPage.contextTypes = {
  router: PropTypes.object
};
