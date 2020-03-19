import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { getPoll } from "../api/api";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);
      setPoll(poll);
    }

    doGetPoll();
  }, [pollId]);

  return (
    <>
      <Container>
        <h2>{poll?.question}</h2>
        <div>{poll?.answerOne}</div>
        <div>{poll?.answerTwo}</div>
        <div>{poll?.answerThree}</div>
      </Container>
    </>
  );
}

export default Result;
