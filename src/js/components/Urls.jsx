import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Urls extends Component {
  showContent() {
    return (
      <div className="urls">
      <h1>Links to Projects</h1>
      <ul>
        <li>
          <a target="_blank" href="https://ellies-quest-rebirth.herokuapp.com/">
            Ellie's Quest Rebirth
          </a>&nbsp;
          React (Work in Progress)
        </li>
      </ul>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'urls' ? null : 'urls';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const urlsClasses = {
      'urls': true,
      'container': true
    };

    return (
      <div
        className={classnames(urlsClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <h1>Links to Projects</h1>
        <div className="content">
          <a target="_blank" href="https://ellies-quest-rebirth.herokuapp.com/">
            Ellie's Quest Rebirth
          </a>
        </div>
      </div>
    )
  }
}

Urls.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Urls);
