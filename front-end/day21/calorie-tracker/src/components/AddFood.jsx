import "./AddFood.css";
import "../App.css";
import { useState } from "react";

const AddFood = ({ addFoodItem }) => {
  const [foodName, setFoodName] = useState("");
  const [calorie, setCalorie] = useState("");

  const resetFormFields = () => {
    setFoodName("");
    setCalorie("");
  };
  return (
    <form
      onSubmit={(e) => {
        addFoodItem(e, foodName, calorie);
        resetFormFields();
      }}
    >
      <input
        type="text"
        name="food-name"
        value={foodName}
        placeholder="name of food item"
        onChange={(e) => setFoodName(e.target.value)}
      />
      <input
        type="number"
        name="calorie"
        value={calorie}
        placeholder="amount of calorie"
        onChange={(e) => setCalorie(e.target.value)}
      />
      <br />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddFood;
