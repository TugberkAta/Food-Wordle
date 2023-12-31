const StepsHint = ({ data, count, displayMode }) => {
  data = data.data;
  return (
    <div>
      <h3 className="mb-1 font-light text-sm  text-gray-400">Cooking Steps</h3>
      <ol>
        {data[0].foodStepsArray.map((e, index) => (
          <li
            key={index}
            className={`duration-300 ${
              count <= 3
                ? "blur-sm w-80 mb-2 transform: translate3d(0, 0, 0);"
                : "blur-none w-80 mb-2"
            } ${displayMode ? "text-white" : "text-black"}`}
          >
            {index + 1 + "- " + e}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepsHint;
