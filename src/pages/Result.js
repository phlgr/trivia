import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";

const POLLS_API_URL = "http://localhost:4000/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      console.log(poll);
      setPoll(poll);
    }

    getPoll();
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
