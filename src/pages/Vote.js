import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Form from "../components/Form";
import RadioInput from "../components/RadioInput";
import Container from "../components/Container";
import { patchPoll, getPoll } from "../api/api";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);
      setPoll(poll);
    }

    doGetPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>{poll?.question}</h2>
        <RadioInput
          checked={answer === "answerOne"}
          value="answerOne"
          label={poll?.answerOne}
          onChange={event => setAnswer(event.target.value)}
        />
        <RadioInput
          checked={answer === "answerTwo"}
          value="answerTwo"
          label={poll?.answerTwo}
          onChange={event => setAnswer(event.target.value)}
        />
        <RadioInput
          checked={answer === "answerThree"}
          value="answerThree"
          label={poll?.answerThree}
          onChange={event => setAnswer(event.target.value)}
        />
        <Button>Vote</Button>
      </Form>
    </Container>
  );
}

export default Vote;
