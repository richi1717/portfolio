import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Work extends Component {
  showContent() {
    return (
      <div className="work">
        <h1>Work</h1>
        <ul>
          <li>CSAA AAA Insurance: 2015-current</li>
        </ul>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'work' ? null : 'work';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const workClasses = {
      'work': true,
      'container': true,
      'hover-style': true
    };

    return (
      <div
        className={classnames(workClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Work</h1>
        </div>
      </div>
    )
  }
}

Work.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Work);
