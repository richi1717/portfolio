import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class References extends Component {
  showContent() {
    return (
      <div className="references">
        <h1>References</h1>
        <ul>
          <li>Todd Kurtz |&nbsp;
            <a target="_blank" href="tel:602-478-5884">602.478.5884</a> |&nbsp;
            <a href="mailto:toddalankurtz@yahoo.com?Subject=Job%20Reference:%20Richi%20Jeffery" target="_top">toddalankurtz@yahoo.com</a>
          </li>
          <li>Brant Stuns |&nbsp;
            <a target="_blank" href="tel:602-750-1386">602.750.1386</a> |&nbsp;
            <a href="mailto:brantstuns@gmail.com?Subject=Job%20Reference:%20Richi%20Jeffery" target="_top">brantstuns@gmail.com</a>
          </li>
        </ul>
      </div>
    );
  }


  handleClick() {
    const CARD = this.props.selected === 'references' ? null : 'references';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const referencesClasses = {
      'references': true,
      'container': true,
      'focus': this.props.selected === 'references'
    };

    return (
      <div
        className={classnames(referencesClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>References</h1>
        </div>
      </div>
    )
  }
}

References.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(References);
