import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Name from './Name';
import Skills from './Skills';
import Urls from './Urls';
import History from './History';
import Work from './Work';
import Projects from './Projects';
import Resume from './Resume';
import Github from './Github';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';

import '../../sass/style.scss';

class ContentPage extends Component {
  handleClick() {
    this.props.setSelectedCard(null);
    this.props.setOverlayContent(null);
    window.location = '/';
  }

  render() {
    return (
      <div
        className="overlay-container"
        onClick={() => { this.handleClick(); }}
      >
        {this.props.overlay}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    selected: state.selected.selected,
    overlay: state.overlay.content
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedCard, setOverlayContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
