import React from 'react';
import './quizQuestion.css';
import PropTypes from 'prop-types';

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    this.state = { answerGiven: false };
  }

  styleAnswer = (correctAnswer) => {
    let colorAnswer = {};
    if (this.answerGiven) {
      if (correctAnswer) {
        colorAnswer = { backgroundColor: '#1E7112' };
      } else {
        colorAnswer = { backgroundColor: 'rgba(0, 0, 0, 0.7)' };
      }
    } else {
      colorAnswer = { backgroundColor: 'rgba(16, 25, 113, 1)' };
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
      <div className="quiz">
        <div className="quiz_question">{question}</div>
        <div className="quiz-score">
          <h2>Question: {numberQuestion}/10</h2>
        </div>
        <ul className="quiz_answers">
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
              }}
            >
              {el.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

QuizQuestion.propTypes = {
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

export default QuizQuestion;
