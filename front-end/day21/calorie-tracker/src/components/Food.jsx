import { useState } from "react";
import "./Food.css";

const Food = ({ foodItem, deleteFoodItem, editFoodItem }) => {
  const [isEditable, setIsEditable] = useState(null);
  const [foodName, setFoodName] = useState(foodItem.foodName);
  const [calorie, setCalorie] = useState(foodItem.calorie);

  const Card = () => {
    return (
      <div className="card">
        <div className="card-title">{foodItem.foodName}</div>
        <div className="card-desc">{`you have consumed ${foodItem.calorie} calories`}</div>
        <button
          onClick={() => deleteFoodItem(foodItem.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <button onClick={() => setIsEditable(true)} className="btn btn-info">
          Edit
        </button>
      </div>
    );
  };

  return isEditable ? (
    <div className="card">
      <form>
        <input
          type="text"
          name="food-name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          name="calorie"
          value={calorie}
          onChange={(e) => setCalorie(e.target.value)}
        />
        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
            setIsEditable(null);
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn-info"
          onClick={(e) => {
            editFoodItem(e, foodItem.id, foodName, calorie);
            setIsEditable(null);
          }}
        >
          Edit Item
        </button>
      </form>
    </div>
  ) : (
    <Card />
  );
};

export default Food;
