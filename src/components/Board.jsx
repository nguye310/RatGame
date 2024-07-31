import Tile from "./Tile";
import { useEffect, useState } from "react";

function Board( {tiles, onTileClick} ) {
  // Number of rows
  const n = 9;

  // Number of columns
  const m = 9;

  // Array which will be used to
  // display the chessboard
  const [gameBoard, setGameBoard] = useState([]);


  useEffect(() => {
    const result = [];

    // Iterate n number of times to
    // create n number of rows
    for (let i = 0; i < n; i++) {
      // For each of row create an Array
      // of length m (number of columns)
      const row = Array.from({ length: m });
      result.push(row);
    }

    // Set chess board's value to the
    // created 2d result array
    setGameBoard(result);
  }, []);

  return (
    <>
      {gameBoard.length > 0 &&
        gameBoard.map((row, rIndex) => {
          return (
            <div className=" row justify-center" key={rIndex} >
              {row.map((_, cIndex) => {
                return <Tile onClick={() => onTileClick(rIndex , cIndex)} value={tiles[rIndex][cIndex]} x={rIndex} y={cIndex} />;
              })}
            </div>
          );
        })}
    </>
  );
}

export default Board;
