import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class History extends Component {
  showContent() {
    return (
      <div className="history">
        <h1>History</h1>
        <p>
          Fill it with history goodness.
        </p>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'history' ? null : 'history';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    this.context.router.push('/content');
  }

  render() {
    const historyClasses = {
      'history': true,
      'container': true,
      'focus': this.props.selected === 'history'
    };

    return (
      <div
        className={classnames(historyClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>History</h1>
        </div>
      </div>
    )
  }
}

History.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(History);
