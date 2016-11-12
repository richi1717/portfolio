import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Skills extends Component {
  showContent() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <h2>Proficient With</h2>
        <ul>
          <li>React (this site is built with React BTW)</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>SCSS</li>
          <li>CSS</li>
          <li>Java</li>
          <li>Clojure</li>
        </ul>
        <h2>Use But Not Quite Proficient Yet</h2>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>Ruby</li>
          <li>Backbone</li>
          <li>SoapUi</li>
        </ul>
        <h2>Exposed To</h2>
        <ul>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>Swift</li>
        </ul>
      </div>
    );
  }


  handleClick() {
    const CARD = this.props.selected === 'skills' ? null : 'skills';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    this.context.router.push('/content');
  }

  render() {
    const skillsClasses = {
      'skills': true,
      'container': true,
      'focus': this.props.selected === 'skills'
    };

    return (
      <div
        className={classnames(skillsClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Skills</h1>
        </div>
      </div>
    )
  }
}

Skills.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
