import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dispatch from '../dispatch';

export default class ContentPage extends Component {
  componentWillMount() {
    !this.props.state.content && this.props.history.push('/');
  }

  render() {
    return (
      <div
        className="overlay-container"
        onClick={() => {
          dispatch({
            type: 'HIDE_CONTENT'
          });
          this.props.history.push('/')
        }}
      >
        {this.props.state.content}
      </div>
    );
  }
}

ContentPage.contextTypes = {
  router: PropTypes.object
};
