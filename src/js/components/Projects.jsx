import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Projects extends Component {
  showContent() {
    return (
      <div className="history">
        <h1>History</h1>
        <p>
          Fill it with Project goodness.
        </p>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'projects' ? null : 'projects';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    this.context.router.push('/content');
  }

  render() {
    const projectsClasses = {
      'projects': true,
      'container': true,
      'focus': this.props.selected === 'projects'
    };

    return (
      <div
        className={classnames(projectsClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Projects</h1>
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
