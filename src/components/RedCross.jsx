const RedCross = ({ count }) => {
  return (
    <div className="flex mb-4 mt-4">
      <svg
        viewBox="0 0 24 24"
        style={{ width: "2rem", height: "2rem", background: "inherit" }}
        role="presentation"
      >
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          style={{ fill: count >= 1 ? "red" : "#C5C5C5" }}
        ></path>
      </svg>
      <svg
        viewBox="0 0 24 24"
        style={{ width: "2rem", height: "2rem", background: "inherit" }}
        role="presentation"
      >
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          style={{ fill: count >= 2 ? "red" : "#C5C5C5" }}
        ></path>
      </svg>
      <svg
        viewBox="0 0 24 24"
        style={{ width: "2rem", height: "2rem", background: "inherit" }}
        role="presentation"
      >
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          style={{ fill: count >= 3 ? "red" : "#C5C5C5" }}
        ></path>
      </svg>
      <svg
        viewBox="0 0 24 24"
        style={{ width: "2rem", height: "2rem", background: "inherit" }}
        role="presentation"
      >
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          style={{ fill: count >= 4 ? "red" : "#C5C5C5" }}
        ></path>
      </svg>
      <svg
        viewBox="0 0 24 24"
        style={{ width: "2rem", height: "2rem", background: "inherit" }}
        role="presentation"
      >
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          style={{ fill: count >= 5 ? "red" : "#C5C5C5" }}
        ></path>
      </svg>
    </div>
  );
};

export default RedCross;
