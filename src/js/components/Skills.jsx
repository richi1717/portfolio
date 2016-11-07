import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Skills extends Component {
  showContent() {
    return (
      <p>
        Hi, my name is Richi Jeffery.  I am a web developer.
        I started my career out at Rockit Bootcamp.  I learned
        front end web development there and graduated first in
        my class.  I later went on to work for CSAA AAA Insurance
        where I picked up a lot more skills.  When I left Rockit,
        I had a basic understanding about Javascript, HTML, CSS,
        and Backbone.js.  Since working for CSAA, I have expanded
        my skillset to both ends of the spectrum.  I now know Java,
        Clojure, Node.js, some Spring, and Ruby.  On the front end
        of the spectrum I've increased my vanilla Javascript skills and have
        also learned React, testing with mocha, chai, and jasmine
        on the server side.  I've also written projects from scratch and
        handled maintenance on legacy code.  I liked developing when
        I first started, but can now say I love it.  The more I code,
        the better I get, and the happier I am with my career choice.
      </p>
    );
  }
  render() {
    return (
      <div className="skills container">
        <div className="content">
          <h1>Skills</h1>
        </div>
      </div>
    )
  }
}
//
// function mapStateToProps(state) {
//
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setMenuAttackSelected }, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(BattleMenuAttack);
