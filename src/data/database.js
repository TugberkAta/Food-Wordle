const foodList = [];

function FoodObject(
  foodName,
  foodImg,
  foodStepsArray,
  foodCuisine,
  foodTrivia,
  foodCalories
) {
  this.foodName = foodName;
  this.foodImg = foodImg;
  this.foodStepsArray = foodStepsArray;
  this.foodCuisine = foodCuisine;
  this.foodTrivia = foodTrivia;
  this.foodCalories = foodCalories;
}

function createFood(
  foodName,
  foodImg,
  foodStepsArray,
  foodCuisine,
  foodTrivia,
  foodCalories
) {
  const food = new FoodObject(
    foodName,
    foodImg,
    foodStepsArray,
    foodCuisine,
    foodTrivia,
    foodCalories
  );
  foodList.push(food);
}

createFood(
  "Baklava",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/New_York_Pizza_Slices.png/440px-New_York_Pizza_Slices.png",
  [
    "Combine flour, sugar, salt, and yeast in bowl of food processor. Pulse 3 to 4 times to incorporate.",
    "Add water and olive oil. Run food processor until mixture forms ball that rides around the bowl above the blade, about 15 seconds...",
  ],
  "New York City, New York",
  "Average american eats 46 serving of this food every year.",
  "285-380 calories"
);

export { foodList };
