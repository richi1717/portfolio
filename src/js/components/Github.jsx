import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Github extends Component {
  render() {
    const githubClasses = {
      'github': true,
      'container': true,
      'focus': this.props.selected === 'github'
    };

    return (
      <div className={classnames(githubClasses)}>
        <a target="_blank" href="https://github.com/richi1717"><div className="content">
          <h1>Github</h1>
        </div></a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selected: state.selected.selected
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedCard, setOverlayContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Github);
