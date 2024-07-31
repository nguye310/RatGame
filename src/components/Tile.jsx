import Piece from "./Piece";
import React, {useEffect, useState} from 'react';

function Tile({ x, y, value, onClick}) {

  return (
    <div className="box m-0.5 text-center hover:bg-sky-700 hover:rounded-md" onClick={onClick} >
      <h4><Piece color={value.color} shape={value.shape}/></h4>
    </div>
    )
}

export default Tile;
