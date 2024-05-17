import React, { useState } from "react";
const questions = [
  {
    question: "What is Node.js primarily used for?",
    options: [
      "Client-side scripting",
      "Server-side scripting",
      "Database management",
      "Machine learning",
    ],
    answer: "Server-side scripting",
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm start", "npm init", "node init", "npm install"],
    answer: "npm init",
  },
  {
    question: "In Node.js, which module is used to create a web server?",
    options: ["http", "url", "fs", "path"],
    answer: "http",
  },
  {
    question: "What is the Node.js package manager called?",
    options: ["npm", "nodepm", "njs", "nodem"],
    answer: "npm",
  },
  {
    question: "How do you import a module in Node.js?",
    options: [
      "import module from 'module';",
      "require('module');",
      "include 'module';",
      "load('module');",
    ],
    answer: "require('module');",
  },
  {
    question: "Which command installs a package globally in Node.js?",
    options: [
      "npm install package",
      "npm install -g package",
      "npm global package",
      "npm package -g",
    ],
    answer: "npm install -g package",
  },
  {
    question: "Which command lists all globally installed packages in Node.js?",
    options: ["npm list -g", "npm global list", "npm show -g", "npm list all"],
    answer: "npm list -g",
  },
  {
    question: "Which Node.js module is used to work with file systems?",
    options: ["fs", "file", "filesystem", "files"],
    answer: "fs",
  },
];

const Questionnaire4 = () => {
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

export default Questionnaire4;
