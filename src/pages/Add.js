import React from "react";
import Button from "../components/Button";

import styled from "@emotion/styled";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const QuestionContainer = styled.div`
  width: 100vw;
`;

const QuestionInput = styled.input`
  background: none;
  border: none;
  border-bottom: 3px solid #04d976;
  outline: none;
  font-size: 2rem;
  color: #f2f2f2;
  width: 80%;
  margin: 0px 20px;
  &::placeholder {
    color: #f2f2f2;
  }
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100vw;
  margin: 40px 0 60px;
`;

const AnswerInput = styled.input`
  width: 60%;
  border: none;
  background: none;
  font-size: 1.4rem;
  color: #f2f2f2;
  outline: none;
  border-bottom: 2px solid #04d976;
  margin: 5px 20px;
  &::placeholder {
    color: #f2f2f2;
  }
`;

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

    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        "https://my-json-server.typicode.com/phlgr/trivia/polls",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(poll)
      }
    );
    const createdNewPoll = await response.json();

    alert(`New poll is created with the id ${createdNewPoll.id}`);
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <QuestionContainer>
        <QuestionInput
          placeholder="Enter your question..."
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
      </QuestionContainer>
      <AnswerContainer>
        <AnswerInput
          placeholder="Answer 1"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <AnswerInput
          placeholder="Answer 2"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <AnswerInput
          placeholder="Answer 3"
          value={answerThree}
          onChange={event => {
            setAnswerThree(event.target.value);
          }}
        />
      </AnswerContainer>
      <Button type="submit">Submit!</Button>
    </FormContainer>
  );
}

export default Add;
