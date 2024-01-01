const StepsHint = ({ data, count }) => {
  data = data.data;
  console.log(data);
  return (
    <div className={count <= 1 ? "blur-sm" : "blur-none"}>
      {data.recipes[0].analyzedInstructions[0].steps
        .slice(0, 3)
        .map((e, index) => (
          <li key={index} className="w-80 mb-2">
            {e.step}
          </li>
        ))}
    </div>
  );
};

export default StepsHint;
