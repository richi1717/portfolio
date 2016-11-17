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
      'container': true
    };

    return (
      <div className={classnames(contactClasses)}>
        <h1>Contact Me</h1>
        <div className="content">
          <a href="mailto:richi1717@gmail.com?Subject=Potential%20Job,%20Liked%20Your%20Site" target="_top">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 511.626 511.627" xmlSpace="preserve">
              <g>
              	<path d="M498.208,68.235c-8.945-8.947-19.701-13.418-32.261-13.418H45.682c-12.562,0-23.318,4.471-32.264,13.418   C4.471,77.18,0,87.935,0,100.499v310.633c0,12.566,4.471,23.312,13.418,32.257c8.945,8.953,19.701,13.422,32.264,13.422h420.266   c12.56,0,23.315-4.469,32.261-13.422c8.949-8.945,13.418-19.697,13.418-32.257V100.499   C511.626,87.935,507.158,77.18,498.208,68.235z M475.078,411.125c0,2.475-0.903,4.616-2.714,6.424   c-1.81,1.81-3.949,2.706-6.42,2.706H45.679c-2.474,0-4.616-0.896-6.423-2.706c-1.809-1.808-2.712-3.949-2.712-6.424V191.858   c6.09,6.852,12.657,13.134,19.7,18.843c51.012,39.209,91.553,71.374,121.627,96.5c9.707,8.186,17.607,14.561,23.697,19.13   c6.09,4.571,14.322,9.185,24.694,13.846c10.373,4.668,20.129,6.991,29.265,6.991h0.287h0.284c9.134,0,18.894-2.323,29.263-6.991   c10.376-4.661,18.613-9.274,24.701-13.846c6.089-4.569,13.99-10.944,23.698-19.13c30.074-25.126,70.61-57.291,121.624-96.5   c7.043-5.708,13.613-11.991,19.694-18.843V411.125L475.078,411.125z M475.078,107.92v3.14c0,11.229-4.421,23.745-13.271,37.543   c-8.851,13.798-18.419,24.792-28.691,32.974c-36.74,28.936-74.897,59.101-114.495,90.506c-1.14,0.951-4.474,3.757-9.996,8.418   c-5.514,4.668-9.894,8.241-13.131,10.712c-3.241,2.478-7.471,5.475-12.703,8.993c-5.236,3.518-10.041,6.14-14.418,7.851   c-4.377,1.707-8.47,2.562-12.275,2.562h-0.284h-0.287c-3.806,0-7.895-0.855-12.275-2.562c-4.377-1.711-9.185-4.333-14.417-7.851   c-5.231-3.519-9.467-6.516-12.703-8.993c-3.234-2.471-7.614-6.044-13.132-10.712c-5.52-4.661-8.854-7.467-9.995-8.418   c-39.589-31.406-77.75-61.57-114.487-90.506c-27.981-22.076-41.969-49.106-41.969-81.083c0-2.472,0.903-4.615,2.712-6.421   c1.809-1.809,3.949-2.714,6.423-2.714h420.266c1.52,0.855,2.854,1.093,3.997,0.715c1.143-0.385,1.998,0.331,2.566,2.138   c0.571,1.809,1.095,2.664,1.57,2.57c0.477-0.096,0.764,1.093,0.859,3.571c0.089,2.473,0.137,3.718,0.137,3.718V107.92   L475.078,107.92z" style={{fill: 'rgba(255, 255, 255)'}}></path>
              </g>
            </svg>
          </a>
          <a target="_blank" href="tel:602-334-3470">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="2rem" height="2rem" viewBox="0 0 299.995 299.995" style={{fill: 'rgba(255, 255, 255)'}} xmlSpace="preserve">
              <g style={{fill: 'rgba(255, 255, 255)'}}>
              <g style={{fill: 'rgba(255, 255, 255)'}}>
                <g style={{fill: 'rgba(255, 255, 255)'}}>
                  <path d="M149.992,0.001C67.156,0.001,0,67.159,0,149.998c0,82.837,67.156,149.997,149.992,149.997     c82.842,0,150.003-67.161,150.003-149.997C299.995,67.159,232.834,0.001,149.992,0.001z M210.947,217.132v10.374     c0,5.729-4.645,10.374-10.374,10.374h-10.374h-57.256H96.829c-11.458,0-20.749-9.29-20.749-20.749V86.592     c0-11.458,9.29-20.749,20.749-20.749h36.113h57.256h10.374c5.729,0,10.374,4.645,10.374,10.374v10.375h0.001V217.132z      M231.695,86.592v130.54v10.374c0,5.729-4.645,10.374-10.374,10.374h-2.806c1.774-3.055,2.806-6.593,2.806-10.374v-10.374V86.592     V76.219c0-3.781-1.032-7.319-2.806-10.374h2.806c5.729,0,10.374,4.645,10.374,10.374V86.592z" style={{fill: 'rgba(255, 255, 255)'}}></path>
                  <path d="M175.591,165.517c0,0-3.909-4.692-8.237-1.455c-3.226,2.412-9.023,7.776-10.416,9.078c0,0-9.69-5.166-15.424-9.884     c-8.494-6.985-14.174-15.608-17.151-20.513l-2.223-4.191c0.775-0.835,6.71-7.189,9.277-10.639     c3.232-4.326-1.452-8.235-1.452-8.235s-13.183-13.183-16.184-15.798c-3.003-2.622-6.461-1.167-6.461-1.167     c-6.315,4.082-12.859,7.628-13.248,24.686c-0.013,15.969,12.109,32.438,25.215,45.188c13.131,14.402,31.162,28.833,48.588,28.817     c17.055-0.384,20.598-6.93,24.678-13.245c0,0,1.46-3.455-1.159-6.458C188.774,178.693,175.591,165.517,175.591,165.517z" style={{fill: 'rgba(255, 255, 255)'}}></path>
                </g>
              </g>
              </g>
            </svg>
          </a>
        </div>
        <h5 onClick={ () => { this.handleClick(); }}>See My Information</h5>
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
