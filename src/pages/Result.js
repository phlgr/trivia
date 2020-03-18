import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/phlgr/trivia/polls";

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

  const answerOneVotes = poll?.votes.filter(vote => vote === "answerOne")
    .length;
  const answerTwoVotes = poll?.votes.filter(vote => vote === "answerTwo")
    .length;
  const answerThreeVotes = poll?.votes.filter(vote => vote === "answerThree")
    .length;

  return (
    <>
      <Container>
        <h2>
          {poll?.question} ({poll?.votes.length} votes)
        </h2>
        <div>
          {poll?.answerOne} ({answerOneVotes} votes)
        </div>
        <div>
          {poll?.answerTwo} ({answerTwoVotes} votes)
        </div>
        <div>
          {poll?.answerThree} ({answerThreeVotes} votes)
        </div>
      </Container>
    </>
  );
}

export default Result;
