import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Form from "../components/Form";
import RadioInput from "../components/RadioInput";
import Container from "../components/Container";

const Label = styled.label`
  display: block;
`;

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/phlgr/trivia/polls";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await fetch(`${POLLS_API_URL}/${pollId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

  const options = ["answerOne", "answerTwo", "answerThree"];

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>{poll?.question}</h2>
        {options.map(option => (
          <RadioInput
            key={option}
            checked={answer === option}
            onChange={event => setAnswer(event.target.value)}
            value={option}
            label={poll?.[option]}
            name="answer"
          />
        ))}
        <Button>Vote</Button>
      </Form>
    </Container>
  );
}

export default Vote;
