import React from 'react';
import 'react-step-progress-bar/styles.css';
import './riddlerProgressBar.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import PropTypes from 'prop-types';
import Robin from '../../img/Robin.png';
import Thor from '../../img/Thor.png';
import Flash from '../../img/Flash.png';
import Ironman from '../../img/Ironman.png';
import CapAmerica from '../../img/CapAmerica.png';
import Spiderman from '../../img/Spiderman-bar.png';
import Batman from '../../img/Batman.png';
import Wonderwoman from '../../img/Wonderwoman.png';
import Manhattan from '../../img/Manhattan.png';
import Superman from '../../img/Superman.png';
import Hulk from '../../img/Hulk.png';

const transitionStyles = {
  entering: { transform: 'scale(2)' },
  entered: { transform: 'scale(1.5)' },
  exiting: { transform: 'scale(2)' },
  exited: { transform: 'scale(1)' },
};

const StepProgressBar = ({ score }) => {
  return (
    <div className="progress-div">
      <div className="progress-bar">
        <ProgressBar
          percent={score * 10}
          filledBackground="linear-gradient(to right, #FF0000, #FF4000, #FF8000, #FFBF00, #FFFF00, #BFFF00, #80FF00, #40FF00, #009000)"
        >
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Robin}
                  alt="Robin"
                  width="15"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Batman}
                  alt="Batman"
                  width="17"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={CapAmerica}
                  alt="America"
                  width="19"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Flash}
                  alt="Flash"
                  width="21"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Spiderman}
                  alt="Spidey"
                  width="23"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Ironman}
                  alt="Ironman"
                  width="25"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Thor}
                  alt="Thor"
                  width="27"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Wonderwoman}
                  alt="WW"
                  width="29"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Manhattan}
                  alt="Manhattan"
                  width="31"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Superman}
                  alt="Superman"
                  width="33"
                />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="progressbar-img"
                  src={Hulk}
                  alt="Hulk"
                  width="40"
                />
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </div>
  );
};

StepProgressBar.propTypes = {
  score: PropTypes.number.isRequired,
};

export default StepProgressBar;
