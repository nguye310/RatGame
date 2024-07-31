
function Player({id}) {
    var playerPieces=[];
    var playerNum={id};
    var playerScore=0;


    function Move() {
        return (<></>);
    }




    return ( 
        <>
        <h2>Player {id}</h2>
        <h2>Score: {playerScore}</h2>
        </>
     );
}

export default Player;