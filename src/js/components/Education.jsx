import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Education extends Component {
  showContent() {
    return (
      <div className="education">
        <h1>Education</h1>
        <ul>
          <li>Rockit Bootcamp | June 2015-Aug 2015 | Graduated First in My Class</li>
          <li>The University of Advancing Computer Technology​ | 2009-2012 | 4.0 GPA maintained</li>
          <li>USMC | 2006-2007 | Aviation Electronic Technician</li>
        </ul>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'education' ? null : 'education';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const educationClasses = {
      'education': true,
      'container': true,
      'hover-style': true
    };

    return (
      <div
        className={classnames(educationClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Education</h1>
        </div>
      </div>
    )
  }
}

Education.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Education);
