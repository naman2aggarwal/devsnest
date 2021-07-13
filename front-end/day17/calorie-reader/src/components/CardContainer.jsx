import "./CardContainer.css";
import Card from "./Card";

function CardContainer() {
  return (
    <div className="card-container">
      <Card food={"Pizza"} calorie={45} />
      <Card food={"Burger"} calorie={65} />
      <Card food={"Coke"} calorie={100} />
      <Card food={"Fried Rice"} calorie={64} />
      <Card food={"Pani Puri"} calorie={1} />
      <Card food={"Noodles"} calorie={34} />
      <Card food={"Pasta"} calorie={56} />
      <Card food={"Toast"} calorie={51} />
    </div>
  );
}

export default CardContainer;
