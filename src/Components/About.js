import React, { useState } from "react";

const About = () => {
  // Inline CSS in JS styling
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    fontSize: "2em",
    marginBottom: "20px",
  };

  const quizContainerStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "left",
  };

  const questionStyle = {
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const optionsStyle = {
    listStyleType: "none",
    padding: "0",
  };

  const optionStyle = {
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1em",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  // Quiz state
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

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
    // Additional questions can be added here
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[0].answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>About Us</h1>
      <p>
        Welcome to our About page! Here you can find information about our
        mission, values, and team. We strive to deliver the best services in the
        industry.
      </p>

      <div style={quizContainerStyle}>
        <div style={questionStyle}>{questions[0].question}</div>
        <ul style={optionsStyle}>
          {questions[0].options.map((option, index) => (
            <li key={index} style={optionStyle}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <button style={buttonStyle} onClick={handleSubmit}>
          Submit
        </button>
        {showResult && (
          <div>
            {selectedOption === questions[0].answer ? "Correct!" : "Incorrect!"}
            <p>Your score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
