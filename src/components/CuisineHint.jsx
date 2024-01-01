const CuisineHint = ({ data, count }) => {
  data = data.data;
  return (
    <div className={count <= 0 ? "blur-sm" : "blur-none"}>
      <p>{data.recipes[0].cuisines.join(", ")}</p>
    </div>
  );
};

export default CuisineHint;
