import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import RadioInput from "../components/RadioInput";
import Container from "../components/Container";
import { patchPoll, getPoll } from "../api/api";
import LoadingAnimation from "../components/LoadingAnimation";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [ButtonContent, setButtonContent] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);
      setPoll(poll);
      setIsLoading(false);
    }

    doGetPoll();
  }, [pollId]);

  React.useEffect(() => {
    const ButtonContent = isLoading ? <LoadingAnimation /> : "Vote";
    setButtonContent(ButtonContent);
  }, [isLoading]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);
  }

  if (isLoading) {
    return (
      <Container>
        <LoadingAnimation />
      </Container>
    );
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
        <Button disabled={isLoading}>{ButtonContent}</Button>
      </Form>
    </Container>
  );
}

export default Vote;
