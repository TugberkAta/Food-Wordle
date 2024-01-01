const PictureHint = ({ data, count }) => {
  data = data.data;
  return (
    <img
      className={`w-96 mt-10 rounded-md ${count < 3 ? "blur-xl" : "blur-none"}`}
      src={data.recipes[0].image}
      alt={data.recipes[0].title}
    />
  );
};

export default PictureHint;
