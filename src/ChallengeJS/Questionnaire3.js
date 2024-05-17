import React, { useState } from "react";

const questions = [
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script ref='xxx.js'>",
      "<script name='xxx.js'>",
    ],
    answer: "<script src='xxx.js'>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alertBox('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "create function myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
      "Call.myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    question: "How do you write an 'if' statement in JavaScript?",
    options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
    answer: "if (i == 5)",
  },
  {
    question: "How does a 'for' loop start?",
    options: [
      "for (i = 0; i < 5; i++)",
      "for i = 1 to 5",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)",
    ],
    answer: "for (i = 0; i < 5; i++)",
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "'This is a comment",
      "# This is a comment",
    ],
    answer: "// This is a comment",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: ["Math.max(x, y)", "Math.ceil(x, y)", "ceil(x, y)", "top(x, y)"],
    answer: "Math.max(x, y)",
  },
  {
    question:
      "What is the correct JavaScript syntax for opening a new window called 'w2'?",
    options: [
      "w2 = window.open('http://www.w3schools.com');",
      "w2 = window.new('http://www.w3schools.com');",
      "w2 = window.create('http://www.w3schools.com');",
      "w2 = window.open('new', 'http://www.w3schools.com');",
    ],
    answer: "w2 = window.open('http://www.w3schools.com');",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "var carName;",
      "variable carName;",
      "v carName;",
      "declare carName;",
    ],
    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "-", "*", "x"],
    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",
    options: ["Yes", "No", "Sometimes", "None of the above"],
    answer: "Yes",
  },
  {
    question:
      "How do you create a function that returns the product of two numbers?",
    options: [
      "function myFunction(a, b) { return a * b; }",
      "function myFunction(a, b) { a * b; }",
      "function myFunction(a, b) { return a + b; }",
      "function myFunction(a, b) { product = a * b; }",
    ],
    answer: "function myFunction(a, b) { return a * b; }",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onclick", "onchange", "onmouseover", "onmouseclick"],
    answer: "onclick",
  },
  {
    question: "How do you find the number of elements in an array?",
    options: ["array.length", "array.size", "array.count", "array.elements"],
    answer: "array.length",
  },
  {
    question: "How do you write a JavaScript 'for' loop?",
    options: [
      "for (i = 0; i < 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      "for (i <= 5; i++)",
    ],
    answer: "for (i = 0; i < 5; i++)",
  },
  {
    question: "How do you add a comment that has more than one line?",
    options: [
      "/* This comment has more than one line */",
      "// This comment has more than one line //",
      "<!-- This comment has more than one line -->",
      "' This comment has more than one line '",
    ],
    answer: "/* This comment has more than one line */",
  },
  {
    question: "What is the JavaScript syntax for printing values in Console?",
    options: [
      "console.log(5);",
      "print(5);",
      "log.console(5);",
      "console.print(5);",
    ],
    answer: "console.log(5);",
  },
  {
    question:
      "Which method adds a new element to the end of an array and returns the new length of the array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question:
      "Which method removes the last element from an array and returns that element?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()",
  },
  {
    question:
      "Which method adds one or more elements to the beginning of an array and returns the new length of the array?",
    options: ["unshift()", "shift()", "push()", "pop()"],
    answer: "unshift()",
  },
  {
    question:
      "Which method removes the first element from an array and returns that element?",
    options: ["shift()", "unshift()", "push()", "pop()"],
    answer: "shift()",
  },
  {
    question:
      "How do you find the index of the first occurrence of an element in an array?",
    options: [
      "array.indexOf(element)",
      "array.find(element)",
      "array.index(element)",
      "array.search(element)",
    ],
    answer: "array.indexOf(element)",
  },
  {
    question: "What is the correct way to write an array in JavaScript?",
    options: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },
  {
    question: "How do you find the minimum value in an array?",
    options: [
      "Math.min(...array)",
      "Math.min(array)",
      "Math.min.apply(null, array)",
      "Math.minimum(array)",
    ],
    answer: "Math.min(...array)",
  },
  {
    question:
      "What is the correct syntax to check if a variable 'x' is not equal to 5?",
    options: ["if (x != 5)", "if x <> 5", "if (x <> 5)", "if x != 5"],
    answer: "if (x != 5)",
  },
  {
    question:
      "Which of the following is the correct syntax to declare a constant in JavaScript?",
    options: [
      "const PI = 3.14;",
      "constant PI = 3.14;",
      "var PI = 3.14;",
      "PI = 3.14;",
    ],
    answer: "const PI = 3.14;",
  },
];

const Questionnaire3 = () => {
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

export default Questionnaire3;
