import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { getPoll } from "../api/api";
import PieChart from "react-minimal-pie-chart";
import LoadingAnimation from "../components/LoadingAnimation";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);

      setPoll(poll);
      setIsLoading(false);
    }

    doGetPoll();
  }, [pollId]);

  if (isLoading) {
    return (
      <Container>
        <LoadingAnimation />
      </Container>
    );
  }

  const answerOneVotes =
    poll?.votes.filter(vote => vote === "answerOne").length || 0;
  const answerTwoVotes =
    poll?.votes.filter(vote => vote === "answerTwo").length || 0;
  const answerThreeVotes =
    poll?.votes.filter(vote => vote === "answerThree").length || 0;
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
        <PieChart
          data={[
            { title: poll?.answerOne, value: answerOneVotes, color: "#E38627" },
            { title: poll?.answerTwo, value: answerTwoVotes, color: "#C13C37" },
            {
              title: poll?.answerThree,
              value: answerThreeVotes,
              color: "#6A2135"
            }
          ]}
        />
      </Container>
    </>
  );
}

export default Result;
