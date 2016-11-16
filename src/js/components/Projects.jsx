import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Projects extends Component {
  showContent() {
    return (
      <div className="projects">
        <h1>Projects on Github</h1>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/richi1717/ellies-quest-rebirth">
              Ellie's Quest Rebirth
            </a>&nbsp;
            React Project (Work in Progress)
          </li>
          <li>
            <a target="_blank" href="https://github.com/richi1717/finances">
              Budget Helper
            </a>&nbsp;
            React Project
          </li>
          <li>
            <a target="_blank" href="https://github.com/richi1717/machi-koro">
              Machi Koro
            </a>&nbsp;
            React Project (Work in Progress)
          </li>
          <li>
            <a target="_blank" href="https://github.com/richi1717/instagram-test">
              Instagram Test
            </a>&nbsp;
            Node Project
          </li>
          <li>
            <a target="_blank" href="https://github.com/richi1717/ElliesQuest">
              Original Ellies Quest
            </a>&nbsp;
            Backbone/Javascript/jQuery Project (first project ever, has bugs)
          </li>
        </ul>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'projects' ? null : 'projects';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const projectsClasses = {
      'projects': true,
      'container': true,
      'hover-style': true
    };

    return (
      <div
        className={classnames(projectsClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Projects on Github</h1>
        </div>
      </div>
    )
  }
}

Projects.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
