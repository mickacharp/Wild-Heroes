import React from 'react';
import 'react-step-progress-bar/styles.css';
import './lifebar.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
// import PropTypes from 'prop-types';

const transitionStyles = {
  entering: { transform: 'scale(1.5)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(1.5)' },
  exited: { transform: 'scale(1)' },
};

const StepProgressBar = () => {
  return (
    <div className="progress-bar">
      <ProgressBar>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={0}
            />
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={10}
            >
              <img src="../../img/Robin.png" alt="Robin" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={20}
            >
              <img src="../../img/Flash.png" alt="Flash" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={30}
            >
              <img src="../../img/Ironman.png" alt="Ironman" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={40}
            >
              <img src="../../img/CapAmerica.png" alt="America" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={50}
            >
              <img src="../../img/Spiderman-bar.png" alt="Spidey" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={60}
            >
              <img src="../../img/Batman.png" alt="Batman" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={70}
            >
              <img src="../../img/Wonderwoman.png" alt="WW" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={80}
            >
              <img src="../../img/Manhattan.png" alt="Manhattan" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={90}
            >
              <img src="../../img/Superman.png" alt="Superman" width="30" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={100}
            >
              <img src="../../img/Hulk.png" alt="Hulk" width="30" />
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

/* const StepProgressBar = () => {
  return (
    <div className="progress-bar">
      <ProgressBar
        percent={10}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 10}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
              alt="pichu"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 10}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
              alt="pichu"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 20}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
              alt="pikachu"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 30}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
              alt="raichu"
            />
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}; */

/* StepProgressBar.propTypes = {
  score: PropTypes.number.isRequired,
}; */

export default StepProgressBar;
