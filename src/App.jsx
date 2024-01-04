import { useState } from "react";
import InputField from "./components/InputField";
import RedCross from "./components/RedCross";
import CuisineHint from "./components/CuisineHint";
import StepsHint from "./components/StepsHint";
import PictureHint from "./components/PictureHint";
import { foodList } from "./data/database";
import CaloriesHint from "./components/CaloriesHint";
import TriviaHint from "./components/TriviaHint";
import DarkModeSwitch from "./components/DarkModeSwitch";

function App() {
  const [count, setCount] = useState(0);
  const [gameState, setGameState] = useState();
  const [displayMode, setDisplayMode] = useState("true");

  const data = foodList;

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-around ${
        displayMode ? "dark-mode" : "light-mode"
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
          setCount={setCount}
          setGameState={setGameState}
        />
      </div>
    </div>
  );
}

export default App;
