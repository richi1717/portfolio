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
      <a
        className={classnames(githubClasses)}
        target="_blank" href="https://github.com/richi1717"
      >
        <div>
          <div className="content">
            <h1>Github</h1>
          </div>
        </div>
      </a>
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
