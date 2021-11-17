import React from 'react';
import 'react-step-progress-bar/styles.css';
import './progressbar.css';
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
  entering: { transform: 'scale(2.3)' },
  entered: { transform: 'scale(1.7)' },
  exiting: { transform: 'scale(2.3)' },
  exited: { transform: 'scale(1)' },
};

const StepProgressBar = ({ score }) => {
  return (
    <div className="progress-div">
      <div className="progress-bar">
        <ProgressBar percent={score * 10}>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Robin} alt="Robin" width="18" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Batman} alt="Batman" width="20" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={CapAmerica} alt="America" width="22" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Flash} alt="Flash" width="24" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Spiderman} alt="Spidey" width="26" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Ironman} alt="Ironman" width="28" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Thor} alt="Thor" width="30" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Wonderwoman} alt="WW" width="32" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Manhattan} alt="Manhattan" width="34" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Superman} alt="Superman" width="36" />
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, transitionState }) => (
              <div
                style={transitionStyles[transitionState]}
                className={`customStep ${accomplished ? 'accomplished' : ''}`}
              >
                <img src={Hulk} alt="Hulk" width="38" />
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
