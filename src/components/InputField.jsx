import { useState } from "react";

const InputField = ({ data, count, setCount }) => {
  data = data.data;
  const [guess, setGuess] = useState("");

  function search(event) {
    if (event.keyCode === 13) {
      const guessWords = guess.toLowerCase().split(" ");
      const matchingWords = [];
      const titleWords = data.recipes[0].title
        .replace(/[^a-z0-9\s]/gi, "")
        .toLowerCase()
        .split(" ");

      guessWords.forEach((word) => {
        if (titleWords.includes(word)) {
          matchingWords.push(word);
        }
      });

      if (matchingWords.length >= 2) {
        setCount(0);
      } else if (count === 3) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
      setGuess("");
    }
  }

  return (
    <>
      <input
        type="text"
        onKeyDown={search}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </>
  );
};

export default InputField;
