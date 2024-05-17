import React, { useState } from "react";

const questions = [
  {
    question: "Which library is used in React for state management?",
    options: ["Redux", "Context API", "MobX", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is a component in React?",
    options: [
      "A JavaScript function or class that optionally accepts inputs and returns a React element",
      "A CSS class",
      "A database table",
      "A server-side script",
    ],
    answer:
      "A JavaScript function or class that optionally accepts inputs and returns a React element",
  },
  {
    question: "Which method is used to update the state in a React component?",
    options: ["updateState", "setState", "changeState", "modifyState"],
    answer: "setState",
  },
  {
    question: "What is JSX in React?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "JavaScript Execution",
      "JavaScript Experience",
    ],
    answer: "JavaScript XML",
  },
  {
    question:
      "Which lifecycle method is called after a component is rendered in React?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentWillUpdate",
      "componentDidUpdate",
    ],
    answer: "componentDidMount",
  },
  {
    question: "In React, what is the virtual DOM?",
    options: [
      "A copy of the real DOM kept in memory",
      "A real DOM element",
      "A JavaScript function",
      "A CSS class",
    ],
    answer: "A copy of the real DOM kept in memory",
  },
  {
    question:
      "Which hook is used to manage state in a functional component in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    question:
      "In React, how do you handle side effects in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useEffect",
  },
];

const Questionnaire6 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (option) => {
    setUserAnswers([...userAnswers, option]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].answer) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className="questionnaire">
      {showResult ? (
        <div className="result-section">
          <h2>
            Your Score: {calculateResult()} out of {questions.length}
          </h2>
        </div>
      ) : (
        <div className="question-section">
          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
            <button className="green-button">Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire6;
