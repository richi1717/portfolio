import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCard, setOverlayContent } from '../actions/index';
import classnames from 'classnames';

class Contact extends Component {
  showContent() {
    return (
      <div className="contact">
        <h1>Contact Me</h1>
          <p>Richi Jeffery |&nbsp;
            <a target="_blank" href="tel:602-334-3470">602.334.3470</a> |&nbsp;
            <a href="mailto:richi1717@gmail.com?Subject=Potential%20Job,%20Liked%20Your%20Site" target="_top">richi1717@gmail.com</a>
          </p>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'contact' ? null : 'contact';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const contactClasses = {
      'contact': true,
      'container': true,
      'focus': this.props.selected === 'contact'
    };

    return (
      <div
        className={classnames(contactClasses)}
        onClick={ () => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Contact Me</h1>
        </div>
      </div>
    )
  }
}

Contact.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
