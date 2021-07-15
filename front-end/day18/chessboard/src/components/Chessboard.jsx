import "./Chessboard.css";
import ChessSquare from "./ChessSquare";

function Chessboard() {
  const TOTAL_SQUARES = 84;
  const squareNumbering = [];
  for (let i = 0; i < TOTAL_SQUARES; i++) {
    squareNumbering.push(i);
  }
  let squareElementList = squareNumbering.map((squareNo) => (
    <ChessSquare position={squareNo} key={squareNo} />
  ));
  return <div className="chessboard">{squareElementList}</div>;
}

export default Chessboard;
