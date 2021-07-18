import "./CardContainer.css";
import Card from "./Card";
import { useState } from "react";

function CardContainer() {
  let foodItems = [
    {
      id: 1,
      foodName: "Pizza",
      calorie: 45,
    },
    {
      id: 2,
      foodName: "Pasta",
      calorie: 46,
    },
    {
      id: 3,
      foodName: "Fried Rice",
      calorie: 55,
    },
    {
      id: 4,
      foodName: "Coke",
      calorie: 25,
    },
    {
      id: 5,
      foodName: "Burger",
      calorie: 155,
    },
  ];
  const [foodList, setFoodList] = useState(foodItems);
  return (
    <div className="card-container">
      {foodList.length === 0 ? (
        <p className="alert">no food listed yet!</p>
      ) : (
        foodList.map((foodItem) => (
          <Card
            food={foodItem}
            key={foodItem.id}
            foodList={foodList}
            setFoodList={setFoodList}
          />
        ))
      )}
    </div>
  );
}

export default CardContainer;
