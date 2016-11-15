import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './AboutMe';
import Name from './Name';
import Picture from './Picture';
import Skills from './Skills';
import Urls from './Urls';
import Education from './Education';
import Military from './Military';
import Work from './Work';
import Contact from './Contact';
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
    elem.style.height = "500vh";
    window.requestAnimationFrame(function() {
      elem.style.transition = "all 1500ms";
      elem.style.opacity = 1;
      elem.style.height = "100vh";
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
            <AboutMe />
          </div>
          <Resume />
        </div>
        <div className="column right col-right">
          <div className="sub-column left">
            <Urls />
            <Work />
            <Projects />
            <References />
          </div>
          <div className="sub-column right">
            <Education />
            <Contact />
            <Military />
            <Github />

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
