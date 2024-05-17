import React, { useState } from "react";

const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an external style sheet?",
    options: ["<link>", "<style>", "<script>", "<css>"],
    answer: "<link>",
  },
  {
    question: "Which is the correct CSS syntax?",
    options: [
      "body {color: black;}",
      "{body;color:black;}",
      "body:color=black;",
      "{body:color=black;}",
    ],
    answer: "body {color: black;}",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    options: [
      "/* this is a comment */",
      "// this is a comment",
      "// this is a comment //",
      "' this is a comment",
    ],
    answer: "/* this is a comment */",
  },
  {
    question: "Which property is used to change the background color?",
    options: ["background-color", "color", "bgcolor", "bg-color"],
    answer: "background-color",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    options: [
      "h1 {background-color: #FFFFFF;}",
      "h1.all {background-color: #FFFFFF;}",
      "all.h1 {background-color: #FFFFFF;}",
      "h1 {color: #FFFFFF;}",
    ],
    answer: "h1 {background-color: #FFFFFF;}",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "text-color", "font-color", "fgcolor"],
    answer: "color",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: "font-size",
  },
  {
    question:
      "What is the correct CSS syntax to make all the <p> elements bold?",
    options: [
      "p {font-weight: bold;}",
      "p {text-size: bold;}",
      "p {font-style: bold;}",
      "p {text-weight: bold;}",
    ],
    answer: "p {font-weight: bold;}",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {text-decoration: none;}",
      "a {decoration: no-underline;}",
      "a {underline: none;}",
      "a {text-decoration: no-underline;}",
    ],
    answer: "a {text-decoration: none;}",
  },
  {
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      "text-transform: capitalize;",
      "text-style: capitalize;",
      "text-transform: uppercase;",
      "text-decoration: capitalize;",
    ],
    answer: "text-transform: capitalize;",
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight", "font-size"],
    answer: "font-family",
  },
  {
    question: "How do you make the text italic?",
    options: [
      "font-style: italic;",
      "font: italic;",
      "font-family: italic;",
      "font-weight: italic;",
    ],
    answer: "font-style: italic;",
  },
  {
    question: "Which property is used to change the left margin of an element?",
    options: ["margin-left", "padding-left", "margin-right", "padding-right"],
    answer: "margin-left",
  },
  {
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-style-type: square;",
      "list: square;",
      "list-type: square;",
      "list-square: true;",
    ],
    answer: "list-style-type: square;",
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    answer: "#demo",
  },
  {
    question: "How do you select elements with class name 'test'?",
    options: [".test", "#test", "*test", "test"],
    answer: ".test",
  },
  {
    question: "How do you group selectors?",
    options: [
      "Separate each selector with a comma",
      "Separate each selector with a plus sign",
      "Separate each selector with a space",
      "Separate each selector with a period",
    ],
    answer: "Separate each selector with a comma",
  },
  {
    question: "What is the default value of the position property?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",
  },
  {
    question: "Which CSS property is used to change the space between letters?",
    options: [
      "letter-spacing",
      "text-spacing",
      "font-spacing",
      "character-spacing",
    ],
    answer: "letter-spacing",
  },
  {
    question: "How do you change the bullet color in a list?",
    options: [
      "Use the 'color' property",
      "Use the 'list-style' property",
      "Use the 'list-style-type' property",
      "Use the 'background-color' property",
    ],
    answer: "Use the 'color' property",
  },
  {
    question: "Which property is used to set the width of an element?",
    options: ["width", "min-width", "max-width", "height"],
    answer: "width",
  },
  {
    question: "How do you center a block element horizontally?",
    options: [
      "margin: auto;",
      "padding: auto;",
      "text-align: center;",
      "center: true;",
    ],
    answer: "margin: auto;",
  },
  {
    question: "What is the correct syntax to set the line height to 2?",
    options: [
      "line-height: 2;",
      "line-height: 2px;",
      "line-height: 2em;",
      "line-height: 2pt;",
    ],
    answer: "line-height: 2;",
  },
  {
    question: "How do you add a shadow to an element?",
    options: [
      "box-shadow: 10px 10px 5px grey;",
      "shadow: 10px 10px 5px grey;",
      "element-shadow: 10px 10px 5px grey;",
      "add-shadow: 10px 10px 5px grey;",
    ],
    answer: "box-shadow: 10px 10px 5px grey;",
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight", "font-variant"],
    answer: "font-family",
  },
  {
    question: "How do you make a text bold?",
    options: [
      "font-weight: bold;",
      "font-style: bold;",
      "font-family: bold;",
      "text-weight: bold;",
    ],
    answer: "font-weight: bold;",
  },
  {
    question: "How do you create a flex container?",
    options: [
      "display: flex;",
      "display: block;",
      "display: inline;",
      "display: grid;",
    ],
    answer: "display: flex;",
  },
  {
    question: "How do you apply a 2D transformation to an element?",
    options: [
      "transform: rotate(45deg);",
      "transformation: rotate(45deg);",
      "transformation: rotate(45deg) 2D;",
      "transform: rotate(45deg) 2D;",
    ],
    answer: "transform: rotate(45deg);",
  },
  {
    question: "What is the CSS syntax for a media query?",
    options: [
      "@media screen and (max-width: 600px)",
      "@query screen and (max-width: 600px)",
      "@screen and (max-width: 600px)",
      "@media (max-width: 600px)",
    ],
    answer: "@media screen and (max-width: 600px)",
  },
];

const Questionnaire2 = () => {
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

export default Questionnaire2;
