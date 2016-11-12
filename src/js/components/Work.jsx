import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Work extends Component {
  showContent() {
    return (
      <div className="history">
        <h1>History</h1>
        <p>
          Fill it with Work goodness.
        </p>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'work' ? null : 'work';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    this.context.router.push('/content');
  }

  render() {
    const workClasses = {
      'work': true,
      'container': true,
      'focus': this.props.selected === 'work'
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
