import { useEffect, useState } from "react";

const Fetch = ({ data, setData }) => {
  data = data.data;
  useEffect(() => {
    if (!data) {
      console.log("Fetching Started");
      fetch(
        "https://api.spoonacular.com/recipes/random" +
          "?apiKey=" +
          config.API_KEY +
          "&addRecipeInformation=True" +
          "&instructionsRequired=True"
      )
        .then((res) => res.json())
        .then((fetchedData) => {
          console.log("Fetching Complete");
          setData(fetchedData);
          localStorage.setItem("recipe", JSON.stringify(fetchedData));
        })
        .catch((error) => console.log("Fetching error:", error));
    }
  }, [data]);

  console.log(data);

  return <></>;
};

export default Fetch;
