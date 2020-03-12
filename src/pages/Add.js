import React from "react";
import "./Add.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Add() {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };

    const response = await fetch(process.env.REACT_APP_POLLS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(poll)
    });
    const createdNewPoll = await response.json();

    alert(`New poll is created with the id ${createdNewPoll.id}`);
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="questionContainer">
        <input
          className="questionInput"
          placeholder="Enter your question..."
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
      </div>
      <div className="answerContainer">
        <input
          className="answerInput"
          placeholder="Answer 1"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <input
          className="answerInput"
          placeholder="Answer 2"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <input
          className="answerInput"
          placeholder="Answer 3"
          value={answerThree}
          onChange={event => {
            setAnswerThree(event.target.value);
          }}
        />
      </div>
      <Button type="submit">Submit!</Button>
    </form>
  );
}

export default Add;
