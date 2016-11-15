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
        <ul style={{'listStyle': 'none'}}>
          <li className="bold-li">React (this site is built with React BTW)</li>
          <li>Backbone</li>
          <li>Angular</li>
          <li className="bold-li">Javascript (ES5, ES6/ES2015)</li>
          <li className="bold-li">HTML</li>
          <li className="bold-li">SCSS</li>
          <li className="bold-li">CSS</li>
          <li className="bold-li">Node</li>
          <li className="bold-li">Express</li>
          <li>TypeScript</li>
          <li className="bold-li">Java</li>
          <li className="bold-li">Clojure</li>
          <li>Ruby</li>
          <li>SoapUi</li>
          <li>Swift</li>
        </ul>
      </div>
    );
  }


  handleClick() {
    const CARD = this.props.selected === 'skills' ? null : 'skills';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const skillsClasses = {
      'skills': true,
      'container': true
    };

    return (
      <div
        className={classnames(skillsClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <h1>Skills</h1>
        <div className="content">
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS/SCSS</li>
          </ul>
        </div>
        <h5>Click To See More</h5>
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
