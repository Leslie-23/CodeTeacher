import React, { useState } from "react";

const questions = [
  {
    question: "What is the main programming language used in Django?",
    options: ["JavaScript", "Java", "Python", "Ruby"],
    answer: "Python",
  },
  {
    question: "Which command is used to start a new project in Django?",
    options: [
      "django-admin startproject projectname",
      "django startproject projectname",
      "django-admin newproject projectname",
      "django newproject projectname",
    ],
    answer: "django-admin startproject projectname",
  },
  {
    question: "What is the purpose of the `settings.py` file in Django?",
    options: [
      "Define URL routes",
      "Configure project settings",
      "Define database models",
      "Create views",
    ],
    answer: "Configure project settings",
  },
  {
    question: "What is the Django ORM used for?",
    options: [
      "Object-Relational Mapping",
      "Object-Resource Mapping",
      "Object-Rendering Mapping",
      "Object-Routing Mapping",
    ],
    answer: "Object-Relational Mapping",
  },
  {
    question: "Which command creates a new app in a Django project?",
    options: [
      "django-admin startapp appname",
      "django startapp appname",
      "django-admin newapp appname",
      "django newapp appname",
    ],
    answer: "django-admin startapp appname",
  },
  {
    question: "In Django, where do you define URL patterns for an app?",
    options: ["urls.py", "views.py", "models.py", "settings.py"],
    answer: "urls.py",
  },
  {
    question: "What is the primary function of the `views.py` file in Django?",
    options: [
      "Define request handlers",
      "Define database models",
      "Define URL patterns",
      "Configure project settings",
    ],
    answer: "Define request handlers",
  },
];

const Questionnaire5 = () => {
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

export default Questionnaire5;
