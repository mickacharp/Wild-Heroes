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

const RiddlerProgressBar = ({ score }) => {
  const transitionStyles = {
    entering: { transform: 'scale(2)' },
    entered: { transform: 'scale(1.5)' },
    exiting: { transform: 'scale(2)' },
    exited: { transform: 'scale(1)' },
  };
  return (
    <div className="riddlerprogress-div">
      <div className="riddlerprogress-bar">
        <ProgressBar
          percent={score * 100}
          filledBackground="linear-gradient(to right, #298A08, #04B404, #01DF01, #00FF00)"
        >
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img
                  className="riddlerprogressbar-img"
                  src={Catwoman}
                  alt="Catwoman"
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
                  className="riddlerprogressbar-img"
                  src={Penguin}
                  alt="Penguin"
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
                  className="riddlerprogressbar-img"
                  src={Deathstroke}
                  alt="Deathstroke"
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
                  className="riddlerprogressbar-img"
                  src={Scarecrow}
                  alt="Scarecrow"
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
                  className="riddlerprogressbar-img"
                  src={Poisonivy}
                  alt="Ivy"
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
                  className="riddlerprogressbar-img"
                  src={Twoface}
                  alt="Twoface"
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
                  className="riddlerprogressbar-img"
                  src={Harley}
                  alt="Harley"
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
                  className="riddlerprogressbar-img"
                  src={Bane}
                  alt="Bane"
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
                  className="riddlerprogressbar-img"
                  src={Rasalghul}
                  alt="Rasalghul"
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
                  className="riddlerprogressbar-img"
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
                  className="riddlerprogressbar-img"
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

RiddlerProgressBar.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RiddlerProgressBar;
