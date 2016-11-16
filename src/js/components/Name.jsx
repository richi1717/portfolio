import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { setSelectedCard, setOverlayContent } from '../actions/index';

class Name extends Component {
  render() {
    const nameClasses = {
      names: true,
      container: true,
      focus: this.props.selected === 'name'
    };

    return (
      <div className={classnames(nameClasses)}>
        <div className="content">
          <h1>Richi Jeffery</h1>
        </div>
      </div>
    )
  }
}

Name.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    selected: state.selected.selected
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedCard, setOverlayContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);
