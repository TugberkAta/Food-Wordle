const TriviaHint = ({ data, count, displayMode }) => {
  data = data.data;
  return (
    <div className="border-b-2 border-gray-400 w-fit">
      <h3 className="mb-1 font-light text-sm  text-gray-400">Trivia</h3>
      <p
        className={`blurred-hint ${
          count <= 2
            ? "blur-sm opacity-0 -translate-x-8"
            : "blur-none opacity-100 -translate-x-0"
        } ${displayMode ? "text-white" : "text-black"}`}
      >
        {data[0].foodTrivia}
      </p>
    </div>
  );
};

export default TriviaHint;
