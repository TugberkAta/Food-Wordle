import Countdown from "./Countdown.jsx";
import ScorePanel from "./ScorePanel.jsx";

const ScoreBoard = ({
  data,
  count,
  gameState,
  displayMode,
  setGameState,
  setCount,
  setInputType,
}) => {
  data = data.data;
  return gameState === "" ? (
    <></>
  ) : (
    <>
      <div
        className={`h-2/3 z-10 w-80 absolute score-screen rounded-sm text-center text-white flex flex-col justify-around bg-no-repeat bg-center bg-cover ${
          displayMode
            ? "bg-[url('./assets/circle-scatter-haikei-2.svg')]"
            : "bg-[url('./assets/circle-scatter-haikei-2.svg')]"
        }`}
      >
        <div>
          <button
            className=" text-white font-bold rounded absolute right-2 top-2"
            onClick={() => {
              setGameState("");
              setCount(0);
              setInputType("");
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                background: "inherit",
              }}
              role="presentation"
            >
              <path
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                className="black"
              ></path>
            </svg>
          </button>
          <div className="-mb-9">
            {gameState === "won" ? (
              <>
                <h1 className="text-2xl text-green-300">You won!!</h1>
                <ScorePanel count={count} gameState={gameState}></ScorePanel>
              </>
            ) : (
              <>
                <h1 className="text-2xl text-amber-300">
                  {" "}
                  Better luck next time{" "}
                </h1>
                <ScorePanel count={count} gameState={gameState}></ScorePanel>
              </>
            )}
            <div className="mt-2">
              <h2> The food was</h2>
              <p>{data[0].foodName}</p>
            </div>
          </div>
        </div>
        <div>
          <Countdown></Countdown>
        </div>
      </div>
      <div className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]"></div>
    </>
  );
};

export default ScoreBoard;
