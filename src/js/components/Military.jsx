import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Military extends Component {
  showContent() {
    return (
      <div className="military">
        <h1>Military</h1>
        <p>USMC | Aviation Electronic Technician & Marine Air Traffic Controller</p>
        <ul>Stationed at:
          <li>MCRD San Diego, CA</li>
          <li>Camp Pendleton, CA</li>
          <li>NAS Pensacola, FL</li>
          <li>Camp Lejeune, NC</li>
        </ul>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'military' ? null : 'military';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const militaryClasses = {
      'military': true,
      'container': true
    };

    return (
      <div
        className={classnames(militaryClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Military</h1>
        </div>
      </div>
    )
  }
}

Military.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Military);
