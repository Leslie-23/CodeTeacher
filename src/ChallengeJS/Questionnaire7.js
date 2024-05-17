import React, { useState } from "react";

const questions = [
  {
    question: "What type of database is MongoDB?",
    options: ["Relational", "NoSQL", "Graph", "Key-Value"],
    answer: "NoSQL",
  },
  {
    question: "Which command is used to start the MongoDB server?",
    options: ["mongod", "mongo start", "mongodb", "mongo server"],
    answer: "mongod",
  },
  {
    question: "In MongoDB, which data format is used to store documents?",
    options: ["XML", "YAML", "JSON", "CSV"],
    answer: "JSON",
  },
  {
    question: "How do you insert a document into a MongoDB collection?",
    options: [
      "db.collection.insertOne()",
      "db.collection.add()",
      "db.collection.save()",
      "db.collection.insert()",
    ],
    answer: "db.collection.insertOne()",
  },
  {
    question:
      "In MongoDB, which method is used to retrieve all documents from a collection?",
    options: ["find()", "findAll()", "getAll()", "retrieveAll()"],
    answer: "find()",
  },
  {
    question: "What is the default port for MongoDB?",
    options: ["27017", "27018", "28017", "28018"],
    answer: "27017",
  },
  {
    question: "How do you update a document in MongoDB?",
    options: ["updateOne()", "modify()", "updateDocument()", "change()"],
    answer: "updateOne()",
  },
];
const Questionnaire7 = () => {
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

export default Questionnaire7;
