import React from 'react'
import ratGame from '../model/ratGame'

class RatGame extends React.Component {
    state = {
        gameState: new Game(this.props.playerOne),
        outOfPieces: false
    }

    render() {
        return (
            /**
             * <div background = board>
             * <stage>
             * <layer for loop model and renders it >
             * ...
             */
        )
    }

    move(piece, finalPosition) {

    }
}

export default RatGame