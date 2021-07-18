import "./Card.css";

function Card({ food, foodList, setFoodList }) {
  let plural = food.calorie > 1 ? "s" : "";

  const deleteFoodItem = () => {
    let index = foodList.findIndex((foodItem) => foodItem.id === food.id);
    if (index !== -1) {
      let newFoodList = [...foodList];
      newFoodList.splice(index, 1);
      setFoodList(newFoodList);
    }
  };
  return (
    <div className="card">
      <h2>{food.foodName}</h2>
      <button onClick={deleteFoodItem}>Delete</button>
      <h3>{`you have consumed ${food.calorie} calorie${plural} today`}</h3>
    </div>
  );
}

export default Card;
