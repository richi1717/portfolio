import React, { Component } from 'react';
import SharedComponent from './SharedComponent';

export default class Arrangement extends Component {
  render() {
    return (
      <div className="arrangement">
        <div className="column left">
          <SharedComponent
            history={this.props.history}
            contentType="aboutMe"
            tileClasses="container names focus"
          >
            <h1>Richi Jeffery</h1>
          </SharedComponent>
          <div className="sub-container">
            <SharedComponent
              history={this.props.history}
              contentType="skills"
              tileClasses="container skills hover-style"
            >
              <h1>Skills</h1>
              <div className="content">
                <ul>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                </ul>
              </div>
              <h5>See More Skills</h5>
            </SharedComponent>
            <SharedComponent
              history={this.props.history}
              contentType="aboutMe"
              tileClasses="container about-me hover-style"
            >
              <div className="content">
                <h1>About Me</h1>
                <p>I am a web developer and I <span style={{color: '#BE0000'}}>
            &#9829;</span> what I do!</p>
                <h5>Read More About Me</h5>
              </div>
            </SharedComponent>
          </div>
          <SharedComponent
            history={this.props.history}
          >
            <a
              className="container resume hover-style"
              target="_blank"
              href="/resume.pdf"
            >
              <div>
                <div className="content">
                  <h1>Resume</h1>
                  <h5>View/Print</h5>
                </div>
              </div>
            </a>
          </SharedComponent>
        </div>
        <div className="column right col-right">
          <div className="sub-column left">
            <SharedComponent
              history={this.props.history}
              tileClasses="urls container"
            >
              <h1>Links to Projects</h1>
              <div className="content">
                <a target="_blank" href="https://ellies-quest-rebirth.herokuapp.com/">
                  Ellie's Quest Rebirth
                </a>
              </div>
            </SharedComponent>
            <SharedComponent
              history={this.props.history}
              contentType="work"
              tileClasses="container work hover-style"
            >
              <h1>Work</h1>
            </SharedComponent>
            <SharedComponent
              history={this.props.history}
              contentType="projects"
              tileClasses="container projects hover-style"
            >
              <h1>Projects on Github</h1>
            </SharedComponent>
            <SharedComponent
              history={this.props.history}
              contentType="references"
              tileClasses="container references hover-style"
            >
              <h1>References</h1>
            </SharedComponent>
          </div>
          <div className="sub-column right">
            <SharedComponent
              history={this.props.history}
              contentType="contact"
              tileClasses="container contact"
            >
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
              <h5>See My Information</h5>
            </SharedComponent>
            <SharedComponent
              history={this.props.history}
              contentType="education"
              tileClasses="container education hover-style"
            >
              <h1>Education</h1>
            </SharedComponent>
            <SharedComponent
              history={this.props.history}
              contentType="military"
              tileClasses="container military hover-style"
            >
              <h1>Military</h1>
            </SharedComponent>
            <SharedComponent
              history={this.props.history}
              tileClasses="container github"
            >
              <a
                target="_blank"
                href="https://github.com/richi1717"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="4rem" height="4rem" viewBox="0 0 438.549 438.549" style={{fill: 'rgb(255, 255, 255)'}} xmlSpace="preserve">
                  <g style={{fill: 'rgb(255, 255, 255)'}}>
                    <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z" style={{fill: 'rgb(255, 255, 255)'}}></path>
                  </g>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/richijeffery"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="4rem" height="4rem" viewBox="0 0 438.536 438.535" style={{fill: 'rgb(255, 255, 255)'}} xmlSpace="preserve">
                  <g style={{fill: 'rgb(255, 255, 255)'}}>
                    <g style={{fill: 'rgb(255, 255, 255)'}}>
                      <rect x="5.424" y="145.895" width="94.216" height="282.932" style={{fill: 'rgb(255, 255, 255)'}}></rect>
                      <path d="M408.842,171.739c-19.791-21.604-45.967-32.408-78.512-32.408c-11.991,0-22.891,1.475-32.695,4.427    c-9.801,2.95-18.079,7.089-24.838,12.419c-6.755,5.33-12.135,10.278-16.129,14.844c-3.798,4.337-7.512,9.389-11.136,15.104    v-40.232h-93.935l0.288,13.706c0.193,9.139,0.288,37.307,0.288,84.508c0,47.205-0.19,108.777-0.572,184.722h93.931V270.942    c0-9.705,1.041-17.412,3.139-23.127c4-9.712,10.037-17.843,18.131-24.407c8.093-6.572,18.13-9.855,30.125-9.855    c16.364,0,28.407,5.662,36.117,16.987c7.707,11.324,11.561,26.98,11.561,46.966V428.82h93.931V266.664    C438.529,224.976,428.639,193.336,408.842,171.739z" style={{fill: 'rgb(255, 255, 255)'}}></path>
                      <path d="M53.103,9.708c-15.796,0-28.595,4.619-38.4,13.848C4.899,32.787,0,44.441,0,58.529c0,13.891,4.758,25.505,14.275,34.829    c9.514,9.325,22.078,13.99,37.685,13.99h0.571c15.99,0,28.887-4.661,38.688-13.99c9.801-9.324,14.606-20.934,14.417-34.829    c-0.19-14.087-5.047-25.742-14.561-34.973C81.562,14.323,68.9,9.708,53.103,9.708z" style={{fill: 'rgb(255, 255, 255)'}}></path>
                    </g>
                  </g>
                </svg>
              </a>
            </SharedComponent>
          </div>
        </div>
      </div>
    );
  }
}
