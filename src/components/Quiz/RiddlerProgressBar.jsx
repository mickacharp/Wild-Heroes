import React from 'react';
import 'react-step-progress-bar/styles.css';
import './riddlerProgressBar.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import PropTypes from 'prop-types';
import Twoface from '../../img/Twoface.png';
import Catwoman from '../../img/Catwoman.png';
import Rasalghul from '../../img/Rasalghul.png';
import Penguin from '../../img/Penguin.png';
import Deathstroke from '../../img/Deathstroke.png';
import Scarecrow from '../../img/Scarecrow.png';
import Bane from '../../img/Bane.png';
import Harley from '../../img/Harley.png';
import Poisonivy from '../../img/Poisonivy.png';
import Joker from '../../img/Joker.png';
import Riddler from '../../img/Riddler.png';

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
                  src={Twoface}
                  alt="Twoface"
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
                  src={Catwoman}
                  alt="Catwoman"
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
                  src={Rasalghul}
                  alt="Rasalghul"
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
                  src={Penguin}
                  alt="Penguin"
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
                  src={Deathstroke}
                  alt="Deathstroke"
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
                  src={Scarecrow}
                  alt="Scarecrow"
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
                  src={Bane}
                  alt="Bane"
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
                  src={Harley}
                  alt="Harley"
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
                  src={Poisonivy}
                  alt="Poisonivy"
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
                  src={Joker}
                  alt="Joker"
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
                  src={Riddler}
                  alt="Riddler"
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
