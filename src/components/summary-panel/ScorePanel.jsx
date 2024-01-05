import { useEffect, useState } from "react";
import ScoreBar from "./ScoreBar";

const ScorePanel = ({ count, gameState }) => {
  // Initialize state from local storage or set to 0 if not available
  const [score1, setScore1] = useState(
    localStorage.getItem("score1")
      ? parseInt(localStorage.getItem("score1"))
      : 0
  );
  const [score2, setScore2] = useState(
    localStorage.getItem("score2")
      ? parseInt(localStorage.getItem("score2"))
      : 0
  );
  const [score3, setScore3] = useState(
    localStorage.getItem("score3")
      ? parseInt(localStorage.getItem("score3"))
      : 0
  );
  const [score4, setScore4] = useState(
    localStorage.getItem("score4")
      ? parseInt(localStorage.getItem("score4"))
      : 0
  );
  const [score5, setScore5] = useState(
    localStorage.getItem("score5")
      ? parseInt(localStorage.getItem("score5"))
      : 0
  );
  const [score6, setScore6] = useState(
    localStorage.getItem("score6")
      ? parseInt(localStorage.getItem("score6"))
      : 0
  );
  const [totalGamePlayed, setTotalGamePlayed] = useState(
    localStorage.getItem("totalGamePlayed")
      ? parseInt(localStorage.getItem("totalGamePlayed"))
      : 0
  );

  useEffect(() => {
    if (gameState === "won") {
      switch (count) {
        case 0:
          setScore1((prev) => prev + 1);
          break;
        case 1:
          setScore2((prev) => prev + 1);
          break;
        case 2:
          setScore3((prev) => prev + 1);
          break;
        case 3:
          setScore4((prev) => prev + 1);
          break;
        case 4:
          setScore5((prev) => prev + 1);
          break;
        case 5:
          setScore6((prev) => prev + 1);
          break;
        default:
          break;
      }
    }
  }, [gameState, count]);

  // Update total games played and save to local storage
  useEffect(() => {
    const newTotal = score1 + score2 + score3 + score4 + score5;
    setTotalGamePlayed(newTotal);
    localStorage.setItem("totalGamePlayed", newTotal.toString());
  }, [score1, score2, score3, score4, score5]);

  // Save individual scores to local storage
  useEffect(() => {
    localStorage.setItem("score1", score1.toString());
  }, [score1]);
  useEffect(() => {
    localStorage.setItem("score2", score2.toString());
  }, [score2]);
  useEffect(() => {
    localStorage.setItem("score3", score3.toString());
  }, [score3]);
  useEffect(() => {
    localStorage.setItem("score4", score4.toString());
  }, [score4]);
  useEffect(() => {
    localStorage.setItem("score5", score5.toString());
  }, [score5]);
  useEffect(() => {
    localStorage.setItem("score6", score6.toString());
  }, [score6]);

  const calculateProgression = (score) => {
    return totalGamePlayed > 0 ? (score * 100) / totalGamePlayed : 0;
  };

  return (
    <div className="flex flex-col items-center">
      {gameState !== "lost" && (
        <p className="text-xs">You got it in {count + 1} </p>
      )}
      <div className="flex gap-3">
        <ScoreBar scoreProgression={calculateProgression(score1)} index={1} />
        <ScoreBar scoreProgression={calculateProgression(score2)} index={2} />
        <ScoreBar scoreProgression={calculateProgression(score3)} index={3} />
        <ScoreBar scoreProgression={calculateProgression(score4)} index={4} />
        <ScoreBar scoreProgression={calculateProgression(score5)} index={5} />
        <ScoreBar scoreProgression={calculateProgression(score6)} index={6} />
      </div>
    </div>
  );
};

export default ScorePanel;
