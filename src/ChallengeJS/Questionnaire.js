import React, { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<html>"],
    answer: "<style>",
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ol>", "<ul>", "<dl>", "<list>"],
    answer: "<ol>",
  },
  {
    question: "Which HTML tag is used to display a picture?",
    options: ["<img>", "<pic>", "<image>", "<src>"],
    answer: "<img>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a href='url'>Link text</a>",
      "<a>url</a>",
      "<a url='link'>Link text</a>",
      "<link href='url'>Link text</link>",
    ],
    answer: "<a href='url'>Link text</a>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    answer: "style",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body style='background-color:yellow;'>",
      "<background>yellow</background>",
      "<body bg='yellow'>",
      "<body style='bg-color:yellow;'>",
    ],
    answer: "<body style='background-color:yellow;'>",
  },
  {
    question: "How can you make a bulleted list?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct HTML for making a text input field?",
    options: [
      "<input type='text'>",
      "<textfield>",
      "<textinput>",
      "<input text='field'>",
    ],
    answer: "<input type='text'>",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["alt", "title", "src", "longdesc"],
    answer: "alt",
  },
  {
    question: "Which doctype is correct for HTML5?",
    options: [
      "<!DOCTYPE html>",
      "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN' 'http://www.w3.org/TR/html4/strict.dtd'>",
      "<!DOCTYPE HTML5>",
      "<!DOCTYPE HTML 4.01>",
    ],
    answer: "<!DOCTYPE html>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<break>", "<lb>", "<newline>"],
    answer: "<br>",
  },
  {
    question: "What is the correct HTML for adding a background image?",
    options: [
      "<body style='background-image:url(image.jpg)'>",
      "<background img='image.jpg'>",
      "<body bg='image.jpg'>",
      "<img background='image.jpg'>",
    ],
    answer: "<body style='background-image:url(image.jpg)'>",
  },
  {
    question: "What is the correct HTML for creating a table?",
    options: ["<table>", "<tbl>", "<tablelayout>", "<t>"],
    answer: "<table>",
  },
  {
    question: "What does the <th> element represent in a table?",
    options: ["Table header", "Table row", "Table data", "Table cell"],
    answer: "Table header",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<section>", "<foot>"],
    answer: "<footer>",
  },
  {
    question:
      "Which HTML element is used to specify a header for a document or section?",
    options: ["<header>", "<head>", "<top>", "<h1>"],
    answer: "<header>",
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: [
      "<input type='checkbox'>",
      "<checkbox>",
      "<input type='check'>",
      "<check>",
    ],
    answer: "<input type='checkbox'>",
  },
  {
    question: "What does the <a> tag in HTML define?",
    options: ["Hyperlink", "Anchor", "Article", "Active link"],
    answer: "Hyperlink",
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    options: [
      "<a href='url' target='_blank'>",
      "<a href='url' new>",
      "<a href='url' target='new'>",
      "<a href='url' blank>",
    ],
    answer: "<a href='url' target='_blank'>",
  },
  {
    question: "Which HTML element defines navigation links?",
    options: ["<nav>", "<navigation>", "<navigate>", "<n>"],
    answer: "<nav>",
  },
  {
    question: "What does the <div> tag in HTML define?",
    options: [
      "A division or section",
      "A table",
      "An inline container",
      "A hyperlink",
    ],
    answer: "A division or section",
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<important>", "<b>", "<i>"],
    answer: "<strong>",
  },
  {
    question:
      "Which HTML attribute is used to define the character encoding for a document?",
    options: ["charset", "character", "char", "encoding"],
    answer: "charset",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["<title>", "<head>", "<meta>", "<document>"],
    answer: "<title>",
  },
  {
    question: "What is the correct HTML element for playing video files?",
    options: ["<video>", "<movie>", "<media>", "<play>"],
    answer: "<video>",
  },
  {
    question: "What is the correct HTML element for playing audio files?",
    options: ["<audio>", "<sound>", "<play>", "<music>"],
    answer: "<audio>",
  },
  {
    question: "What is the correct HTML for creating a dropdown list?",
    options: ["<select>", "<dropdown>", "<list>", "<option>"],
    answer: "<select>",
  },
  {
    question: "What does the <form> element in HTML define?",
    options: [
      "A form for user input",
      "A table",
      "A form element",
      "An input field",
    ],
    answer: "A form for user input",
  },
  {
    question: "What does the <meta> tag provide in HTML?",
    options: [
      "Metadata about the HTML document",
      "Meta information about the page",
      "Information about the web page",
      "Data about the page content",
    ],
    answer: "Metadata about the HTML document",
  },
];

const Questionnaire = () => {
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

export default Questionnaire;
