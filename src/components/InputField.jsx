import { useEffect, useState } from "react";

const InputField = ({
  data,
  count,
  setCount,
  setGameState,
  setInputType,
  inputType,
}) => {
  data = data.data;
  const [guess, setGuess] = useState("");
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (className === "shake") {
      const timer = setTimeout(() => {
        setClassName("");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [className]);

  function search(event) {
    if (event.keyCode === 13) {
      const guessWords = guess.toLowerCase().split(" ");
      const matchingWords = [];
      const titleWords = data[0].foodName
        .replace(/[^a-z0-9\s]/gi, "")
        .toLowerCase()
        .split(" ");

      guessWords.forEach((word) => {
        if (titleWords.includes(word)) {
          matchingWords.push(word);
        }
      });

      if (
        matchingWords.length >= 2 ||
        titleWords.toString() === matchingWords.toString()
      ) {
        setInputType(true);
        setClassName("pop");
        setGameState("won");
      } else if (count === 5) {
        setGameState("lost");
      } else if (matchingWords.length === 1) {
        setInputType("close");
        setClassName("shake");
      } else {
        setInputType(false);
        setClassName("shake");
        setCount(count + 1);
      }
      setGuess("");
    }
  }

  return (
    <>
      <input
        className={`px-2 outline-none border-2 rounded-sm ${
          inputType === false
            ? `border-red-500 ${className}`
            : "border-gray-500"
        } ${
          inputType === true
            ? ` border-green-400 ${className}`
            : "border-gray-500"
        } ${
          inputType === "close"
            ? ` border-yellow-500 ${className}`
            : "border-gray-500"
        } placeholder:text-gray-400`}
        type="text"
        onKeyDown={search}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter Guess"
      />
    </>
  );
};

export default InputField;
