import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import RedCross from "./components/RedCross";
import CuisineHint from "./components/hints/CuisineHint";
import StepsHint from "./components/hints/StepsHint";
import PictureHint from "./components/hints/PictureHint";
import { foodList } from "./data/database";
import CaloriesHint from "./components/hints/CaloriesHint";
import TriviaHint from "./components/hints/TriviaHint";
import DarkModeSwitch from "./components/DarkModeSwitch";
import ScoreBoard from "./components/summary-panel/ScoreBoard";

function App() {
  const [count, setCount] = useState(0);
  const [gameState, setGameState] = useState("");
  const [inputType, setInputType] = useState("");
  const [displayMode, setDisplayMode] = useState(
    localStorage.getItem("displayMode") === "true"
  );

  useEffect(() => {
    console.log(displayMode);
    localStorage.setItem("displayMode", displayMode);
  }, [displayMode]);

  const data = foodList;

  return (
    <div
      className={`w-full flex flex-col items-center justify-around bg-no-repeat bg-center bg-cover h-screen ${
        displayMode
          ? "bg-[url('./assets/layered-waves-haikei-2.svg')]"
          : "bg-[url('./assets/layered-waves-haikei-5.svg')]"
      }`}
    >
      <DarkModeSwitch
        setDisplayMode={setDisplayMode}
        displayMode={displayMode}
      ></DarkModeSwitch>
      <PictureHint data={{ data }} count={count}></PictureHint>
      <div className="mt-12 flex gap-32 flex-wrap justify-center">
        <div>
          <CaloriesHint
            data={{ data }}
            count={count}
            displayMode={displayMode}
          ></CaloriesHint>
          <CuisineHint
            data={{ data }}
            count={count}
            displayMode={displayMode}
          ></CuisineHint>
          <TriviaHint
            data={{ data }}
            count={count}
            displayMode={displayMode}
          ></TriviaHint>
        </div>
        <StepsHint
          data={{ data }}
          count={count}
          displayMode={displayMode}
        ></StepsHint>
      </div>
      <div className="flex flex-col items-center mb-10">
        <RedCross count={count}></RedCross>
        <InputField
          data={{ data }}
          count={count}
          setGameState={setGameState}
          setCount={setCount}
          setInputType={setInputType}
          inputType={inputType}
        />
      </div>
      <ScoreBoard
        data={{ data }}
        gameState={gameState}
        displayMode={displayMode}
        setGameState={setGameState}
        setCount={setCount}
        count={count}
        setInputType={setInputType}
      ></ScoreBoard>
    </div>
  );
}

export default App;
