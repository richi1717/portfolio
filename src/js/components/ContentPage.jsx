import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { setPageTransitionFadeOutToHome } from '../helpers/PageTransition';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';

import '../../sass/style.scss';

class ContentPage extends Component {
  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this);

    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "all 2500ms";
      elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <div
        className="overlay-container"
        onClick={() => { setPageTransitionFadeOutToHome(this); }}
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
