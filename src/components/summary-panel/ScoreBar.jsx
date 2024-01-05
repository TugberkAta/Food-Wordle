const ScoreBar = ({ scoreProgression, index }) => {
  return (
    <div className="h-40 w-6 flex flex-col justify-end">
      <div
        className="bg-green-400 border-black border-b-8"
        style={{ height: `${scoreProgression}%` }}
      ></div>
      {index}
    </div>
  );
};

export default ScoreBar;
