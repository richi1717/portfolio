import React from 'react';
import PropTypes from 'prop-types';

const SharedComponent = props => {
  const { history, tileClasses, children, contentType } = props;
  const handleClick = () => {
    history.push(`/${contentType.toLowerCase()}`);
  };

  return (
    <div className={tileClasses} onClick={() => contentType && handleClick()}>
      {children}
    </div>
  );
};

SharedComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  tileClasses: PropTypes.string,
  contentType: PropTypes.string,
  children: PropTypes.node.isRequired
};

SharedComponent.defaultProps = {
  contentType: '',
  tileClasses: '',
  history: { push: () => {} }
};

export default SharedComponent;
