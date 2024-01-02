const StepsHint = ({ data, count }) => {
  data = data.data;
  return (
    <div>
      <h3 className="font-light text-sm  text-gray-400">Cooking Steps</h3>
      <ol>
        {data[0].foodStepsArray.map((e, index) => (
          <li
            key={index}
            className={`blurred-hint ${
              count <= 3 ? "blur-sm w-80 mb-2" : "blur-none w-80 mb-2"
            }`}
          >
            {index + 1 + "- " + e}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepsHint;
