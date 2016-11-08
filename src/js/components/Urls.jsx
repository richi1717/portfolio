import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Urls extends Component {
  showContent() {
    return (
      <div className="history">
        <h1>History</h1>
        <p>
          Fill it with URL goodness.
        </p>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'urls' ? null : 'urls';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
  }

  render() {
    const urlsClasses = {
      'urls': true,
      'container': true,
      'focus': this.props.selected === 'urls'
    };

    return (
      <div
        className={classnames(urlsClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Links to Projects</h1>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Urls);
