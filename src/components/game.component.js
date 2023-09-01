import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GameBoardGames from './game-board-games.component'
import Timer from './timer.component'


const Game = () => {
    const [idGame, setIdGame] = useState({});

    const navigate = useNavigate();
    let data = { idGame: idGame };

    return (
        <>
            <div>
                <h1>Welcome to Boogle</h1>
                Select a game
            </div>
            <div className="mt-3 row">
                <div id="Board5x5" className="col">
                    <GameBoardGames boardType = "5x5" setIdGame={setIdGame}/>
                </div>
                <div id="Board4x4" className="col">
                    <GameBoardGames boardType = "4x4" setIdGame={setIdGame}/>
                </div>
            </div>
            <div className="mt-3">
                <div className="form-group text-center">
                    <button className="btn btn-primary"
                        onClick={() => navigate('/user', { state: data })}>
                        Start
                    </button>
                </div>
                <div className="card-header card-text-area text-center">
                    Iniciando: Tiempo estimado
                    <Timer />
                </div>
            </div>
        </>
    )
}

export default Game;