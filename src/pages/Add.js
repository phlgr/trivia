import React from "react";
import "./Add.css";
import { Link } from "react-router-dom";

function Add() {
  return (
    <div className="container">
      <div className="questionContainer">
        <input
          className="questionInput"
          placeholder="Enter your question..."
        ></input>
      </div>
      <div className="answerContainer">
        <input className="answerInput" placeholder="Answer 1"></input>
        <input className="answerInput" placeholder="Answer 2"></input>
        <input className="answerInput" placeholder="Answer 3"></input>
      </div>
      <Link to="/vote" type="submit" className="btn-primary">
        Submit!
      </Link>
    </div>
  );
}

export default Add;
