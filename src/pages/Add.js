import React from 'react';
import './Add.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Add() {
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerThree] = React.useState('');
  console.log(
    `Frage: ${question}, A1: ${answerOne}, A2: ${answerTwo}, A3: ${answerThree}`
  );

  return (
    <form className="container">
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
      <Link to="/vote">
        <Button type="submit">Submit!</Button>
      </Link>
    </form>
  );
}

export default Add;
