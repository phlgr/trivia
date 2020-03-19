import React from "react";
import Button from "../components/Button";
import { postPoll } from "../api/api";
import { useHistory } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";

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
  const history = useHistory();
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [ButtonContent, setButtonContent] = React.useState(null);

  React.useEffect(() => {
    const loading = <LoadingAnimation />;
    const text = "Submit!";
    const ButtonContent = isLoading ? loading : text;
    setButtonContent(ButtonContent);
  }, [isLoading]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      votes: []
    };
    const createdPoll = await postPoll(poll);
    history.push(`/polls/${createdPoll.id}/vote`);
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
      <Button disabled={isLoading} type="submit">
        {ButtonContent}
      </Button>
    </FormContainer>
  );
}

export default Add;
