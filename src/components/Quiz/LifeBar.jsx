import React from 'react';
import 'react-step-progress-bar/styles.css';
import './lifebar.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

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
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={0}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={10}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={20}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={30}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={40}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={50}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={60}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={70}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={80}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={90}
            >
              {index}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`customStep ${accomplished ? 'accomplished' : ''}`}
              percent={100}
            >
              {index}
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

/* const ProgressBar = () => {
  return (
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
  );
}; */

export default StepProgressBar;
