import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Resume extends Component {
  render() {
    const resumeClasses = {
      'resume': true,
      'container': true
    };

    return (
      <a
        className={classnames(resumeClasses)}
        target="_blank"
        href="/resume.pdf"
      >
        <div>
          <div className="content">
            <h1>Resume</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
