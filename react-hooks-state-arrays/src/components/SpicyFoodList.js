import React, { useState } from "react";

function SpicyFoodList() {
  const [foods, setFoods] = useState([]);

  const EXAMPLE_FOODS = [
    { id: 1, name: "Spicy Tacos", heatLevel: 3, cuisine: "Mexican" },
    { id: 2, name: "Buffalo Wings", heatLevel: 5, cuisine: "American" },
    { id: 3, name: "Sichuan Hot Pot", heatLevel: 10, cuisine: "Chinese" },
  ];

  function getNewSpicyFood() {
    // In a real app, this function might generate a new food object dynamically
    // For now, we'll just return one of our example foods at random
    const randomIndex = Math.floor(Math.random() * EXAMPLE_FOODS.length);
    return EXAMPLE_FOODS[randomIndex];
  }

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleRemoveFood(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  function handleUpdateFood(foodIndex) {
    const updatedFood = {
      ...foods[foodIndex],
      heatLevel: foods[foodIndex].heatLevel + 1,
    };
    const newFoodArray = [...foods];
    newFoodArray[foodIndex] = updatedFood;
    setFoods(newFoodArray);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>
        {foods.map((food, index) => (
          <li key={food.id} onClick={() => handleRemoveFood(food.id)}>
            {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}{" "}
            <button onClick={() => handleUpdateFood(index)}>Update Heat</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpicyFoodList;
