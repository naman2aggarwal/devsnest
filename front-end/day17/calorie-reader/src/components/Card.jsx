import "./Card.css";

function Card({ food, calorie }) {
  let plural = calorie > 1 ? "s" : "";
  return (
    <div className="card">
      <h2>{food}</h2>
      <h3>{`you have consumed ${calorie} calorie${plural} today`}</h3>
    </div>
  );
}

export default Card;
