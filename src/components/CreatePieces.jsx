import Piece from "./Piece";

function CreatePieces({onPieceClick}) {
  class playPiece {
    constructor(color, shape) {
      this.color = color;
      this.shape = shape;
    }
  }
  var colorArray = ["red", "yellow", "green", "black"];
  var shapeArray = ["rectangle", "triangle", "oval", "circle"];

  const resultArray = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        resultArray.push(new playPiece(colorArray[i], shapeArray[j]));
      }
    }
  }

  return (
    <>
      <div className="flex flex-wrap mx-3">
        {resultArray.map((item) => {
          return (
            <div color={item.color} shape={item.shape}>
              <Piece onClick={() => onPieceClick(item.color,item.shape)} color={item.color} shape={item.shape} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CreatePieces;
