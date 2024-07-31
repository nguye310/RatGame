import { Image} from "react-konva";
import circle from '../assets/circle.png'
import triangle from '../assets/triangle.png'
import rectangle from '../assets/rectangle.png'
import oval from '../assets/oval.png'

function Piece({ color, shape, onClick}) {
  

    var imageUrl;
    var colorCode;

    if (shape == "triangle") {
        imageUrl = triangle;
    } else if (shape == 'rectangle'){
        imageUrl = rectangle;
    } else if (shape == 'oval'){
        imageUrl = oval;
    } else if (shape == 'circle'){
        imageUrl = circle;
    } 

  return (
    <>
      <div className={`piece box border
      ${color == "red" ? "bg-color-3" : ""}
      ${color == "yellow" ? "bg-color-4" : ""}
      ${color == "black" ? "bg-n-4" : ""}
      ${color == "green" ? "bg-color-6" : ""}`} 

      onClick={onClick}
      >
        <img 
        width= {50}
        height={50}
        src={imageUrl}
        className=""/>
      </div>
    </>
  );
}

export default Piece;
