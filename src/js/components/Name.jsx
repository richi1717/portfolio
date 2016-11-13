import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { setSelectedCard, setOverlayContent } from '../actions/index';

class Name extends Component {
  showContent() {
    return (
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          My name is Richi Jeffery.  I am a web developer.  I
          have a wife and 3 kids who I love more than anything
          in this world.  I have been playing video games my whole
          life and my favorites include Zelda, Mario, Metroid, Destiny,
          Final Fantasy, Resident Evil, and so many more.  If I'm
          not spending time with my family, coding, or playing video
          games, I'm usually playing board games, playing the guitar,
          piano, or bass, or trying to learn a new instrument.
          My collection of video games, posters, books, and figures rivals
          that of GameStop and Best Buy.  My wife has even said she feels
          like she lives in a Best Buy sometimes.  She of course is joking.
          I have a sense of humor which most people enjoy and I get along
          with everyone.  I don't like to watch sports but I do enjoy playing
          basketball, soccer, and throwing footballs or baseballs around.
        </p>
      </div>
    );
  }

  handleClick() {
    const CARD = this.props.selected === 'name' ? null : 'name';

    CARD ? this.props.setOverlayContent(this.showContent()) : null;
    this.props.setSelectedCard(CARD);
    setTimeout(() => { this.context.router.push('/content'); }, 1000);
  }

  render() {
    const nameClasses = {
      names: true,
      container: true,
      focus: this.props.selected === 'name'
    };

    return (
      <div
        className={classnames(nameClasses)}
        onClick={() => { this.handleClick(); }}
      >
        <div className="content">
          <h1>Richi Jeffery</h1>
        </div>
      </div>
    )
  }
}

Name.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Name);
