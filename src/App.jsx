import { useState } from "react";
import Fetch from "./components/Fetch";
import InputField from "./components/InputField";
import RedCross from "./components/RedCross";
import CuisineHint from "./components/CuisineHint";
import StepsHint from "./components/StepsHint";
import PictureHint from "./components/PictureHint";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("recipe");
    return savedData ? JSON.parse(savedData) : null;
  });
  console.log(data);
  return (
    <div className="bg-zinc-50 w-full h-screen flex flex-col items-center">
      <Fetch data={{ data }} setData={setData}></Fetch>
      <PictureHint data={{ data }} count={count}></PictureHint>
      <RedCross count={count}></RedCross>
      <InputField data={{ data }} count={count} setCount={setCount} />
      <div className="mt-12 flex gap-72">
        <CuisineHint data={{ data }} count={count}></CuisineHint>
        <StepsHint data={{ data }} count={count}></StepsHint>
      </div>
    </div>
  );
}

export default App;
