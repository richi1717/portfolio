import React from 'react';
import PropTypes from 'prop-types';

const ContentPage = ({ content }) => (
  <div className="overlay-container">{content}</div>
);

ContentPage.propTypes = {
  content: PropTypes.node.isRequired
};

export default ContentPage;
