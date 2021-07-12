import "./Chessboard.css";

function Chessboard() {
  const rowOfSquares = (
    <>
      <span className="chess-square"></span>
      <span className="chess-square"></span>
      <span className="chess-square"></span>
      <span className="chess-square"></span>
      <span className="chess-square"></span>
      <span className="chess-square"></span>
      <span className="chess-square"></span>
      <span className="chess-square"></span>
    </>
  );
  const rowsOfChess = (
    <>
      <div className="chess-row">{rowOfSquares}</div>
      <div className="chess-row">{rowOfSquares}</div>
      <div className="chess-row">{rowOfSquares}</div>
      <div className="chess-row">{rowOfSquares}</div>
      <div className="chess-row">{rowOfSquares}</div>
      <div className="chess-row">{rowOfSquares}</div>
      <div className="chess-row">{rowOfSquares}</div>
      <div className="chess-row">{rowOfSquares}</div>
    </>
  );

  return <div className="chessboard">{rowsOfChess}</div>;
}

export default Chessboard;
