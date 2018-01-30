import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dispatch from '../dispatch';

export default class ContentPage extends Component {
  render() {
    return (
      <div
        className="overlay-container"
      >
        {this.props.content}
      </div>
    );
  }
}

ContentPage.contextTypes = {
  router: PropTypes.object
};
