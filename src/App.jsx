import { useState } from "react";
import InputField from "./components/InputField";
import RedCross from "./components/RedCross";
import CuisineHint from "./components/CuisineHint";
import StepsHint from "./components/StepsHint";
import PictureHint from "./components/PictureHint";
import { foodList } from "./data/database";
import CaloriesHint from "./components/CaloriesHint";
import TriviaHint from "./components/TriviaHint";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("recipe");
    return savedData ? JSON.parse(savedData) : foodList;
  });

  return (
    <div className=" w-full h-full flex flex-col items-center justify-around">
      <PictureHint data={{ data }} count={count}></PictureHint>
      <div className="mt-12 flex gap-32 flex-wrap justify-center">
        <div>
          <CaloriesHint data={{ data }} count={count}></CaloriesHint>
          <CuisineHint data={{ data }} count={count}></CuisineHint>
          <TriviaHint data={{ data }} count={count}></TriviaHint>
        </div>
        <StepsHint data={{ data }} count={count}></StepsHint>
      </div>
      <div className="flex flex-col items-center mb-10">
        <RedCross count={count}></RedCross>
        <InputField data={{ data }} count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
