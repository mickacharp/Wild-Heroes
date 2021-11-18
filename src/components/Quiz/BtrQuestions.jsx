import React from 'react';
import './btrQuestions.css';
import PropTypes from 'prop-types';
import riddlerImg from '../../img/riddler2.jpg';

class BtrQuestions extends React.Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    this.state = { answerGiven: false };
  }

  styleAnswer = (correctAnswer) => {
    let colorAnswer = {};
    if (this.answerGiven) {
      if (correctAnswer) {
        colorAnswer = { backgroundColor: '#1E7112', transform: 'scale(1.1)' };
      } else {
        colorAnswer = { backgroundColor: '#230133' };
      }
    } else {
      colorAnswer = { backgroundColor: '#4F0373' };
    }
    return colorAnswer;
  };

  /* eslint-enable */

  render() {
    const {
      question,
      answers,
      index,
      setIndex,
      numberQuestion,
      setNumberQuestion,
      score,
      setScore,
      newQuestion,
    } = this.props;

    const changeCard = (correctAnswer) => {
      if (correctAnswer) {
        setIndex(index + 1);
        setScore(score + 1);
      }
    };

    return (
      <div className="container-quiz-riddler">
        <div className="quiz-riddler">
          <div className="quiz-riddler-score">
            <h2>Question: {numberQuestion}/10</h2>
          </div>
          <div className="quiz-riddler_question">{question}</div>
          <ul className="quiz-riddler_answers">
            {answers.map((el) => (
              <li
                key={el.text}
                role="presentation"
                className={`quiz_answer ${this.answerGiven && 'pointer-event'}`}
                /* eslint-disable */
                onClick={() => {
                  this.setState({
                    answerGiven: (this.answerGiven = !this.answerGiven),
                  });
                  setTimeout(() => {
                    newQuestion();
                    changeCard(el.correct);
                    setNumberQuestion(numberQuestion + 1);
                  }, 2000);
                }}
                /* eslint-enable */
                style={{
                  backgroundColor: this.styleAnswer(el.correct).backgroundColor,
                  transform: this.styleAnswer(el.correct).transform,
                }}
              >
                {el.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="container-riddler-flex">
          <div className="container-riddler">
            <img src={riddlerImg} alt="Riddler" />
            <h2>Riddler</h2>
          </div>
        </div>
      </div>
    );
  }
}

BtrQuestions.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  numberQuestion: PropTypes.number.isRequired,
  setNumberQuestion: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  newQuestion: PropTypes.func.isRequired,
};

export default BtrQuestions;
