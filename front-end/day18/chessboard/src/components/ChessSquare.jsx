import "./ChessSquare.css";

function ChessSquare({ position }) {
  let chessBoxClass = "white";
  if (
    (position >= 0 && position < 8) ||
    (position >= 16 && position < 24) ||
    (position >= 32 && position < 40) ||
    (position >= 48 && position < 56)
  ) {
    if (position % 2 === 0) {
      chessBoxClass = "black";
    }
  } else if (position % 2 !== 0) {
    chessBoxClass = "black";
  }
  return <div className={"chess-square " + chessBoxClass}></div>;
}
export default ChessSquare;
