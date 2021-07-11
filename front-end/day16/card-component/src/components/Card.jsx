import cardImg from "../assets/react-meme.png";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img src={cardImg} alt="Funny React Meme" className="card-img" />
      <div className="card-content">
        <h1 className="card-title">React Card</h1>
        <p className="card-desc">This meme is damn funny and accurate!</p>
      </div>
    </div>
  );
}

export default Card;
