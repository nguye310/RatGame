import Board from "./Board";
import CreatePieces from "./CreatePieces";
import Inventory from "./Inventory";
import Player from "./Player";
import Start from "./Start";
import { useState } from "react";



const RatGame = () => {
  //useState to set the tiles
  const [tiles, setTiles] = useState(new Array(9).fill("").map(() => new Array(9).fill("")));

  //useState to set what the current tile is 
  const [currTile, setCurrTile] = useState({
    color: "",
    shape: "",
  })

  //const [playerTurn, setPlayerTurn] = useState(Player1)

  //set the currentTile with the color and shape of the piece that was clicked on
  const pickUpPiece = (color, shape) => {
    setCurrTile({color: color, shape: shape})
  }

  //set the tile of the board with the currentTile (current piece that was clicked on)
  const handleTileClick = (rIndex, cIndex) => {
    const newTiles = [...tiles];
    newTiles[rIndex][cIndex] = currTile;
    setTiles(newTiles);
    //clear the piece so that you can't click on it again
    setCurrTile({color: "", shape: ""})
  }

  return (
    <div className="relative container p-10 w-full h-full">
      <h1 className="text-center">Rat Game</h1>
      <div className="container relative m-10 ml-0">
        <Board tiles={tiles} onTileClick={handleTileClick}/>
      </div>

      <div className="container flex-wrap ml-0">
        <div className="container m-10 relative max-w-full ml-0 overflow-hidden">
          <div className="float-left" width={300}>
            <Player id="1" />
          </div>
          <div className="float-right" width={300}>
            <Player id="2" />
          </div>
          <div className="text-center" width={300}>
            <Start
              
            />
          </div>
        </div>

        <div className="container m-10 max-w-full ml-0 overflow-hidden">
          <div className="float-left">
            <Inventory id="1" />
          </div>
          <div className="float-right">
            <Inventory id="2" />
          </div>
        </div>
      </div>

      <div>
        <CreatePieces onPieceClick={pickUpPiece} />
      </div>

    </div>
  );
};

export default RatGame;
