import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './AboutMe';
import Name from './Name';
import Skills from './Skills';
import Urls from './Urls';
import History from './History';
import Work from './Work';
import Projects from './Projects';
import Resume from './Resume';
import Github from './Github';
import References from './References';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';

import '../../sass/style.scss';

class Arrangement extends Component {
  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this);

    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "all 2500ms";
      elem.style.opacity = 1;
    });
  }

  componentWillReceiveProps() {
    const elem = ReactDOM.findDOMNode(this);

    window.requestAnimationFrame(function() {
      elem.style.transition = 'all 1000ms';
      elem.style.height = 0;
      elem.style.opacity = 0;
    });
  }

  render() {
    return (
      <div className="arrangement">
        <div className="column left">
          <Name />
          <div className="sub-container">
            <Skills />
            <Urls />
          </div>
          <Resume />
        </div>
        <div className="column right col-right">
          <div className="sub-column left">
            <AboutMe />
            <History />
            <Work />
            <Projects />
          </div>
          <div className="sub-column right">
            <Github />
            <References />
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Arrangement);
