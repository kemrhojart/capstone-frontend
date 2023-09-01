import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GameService from "../services/game.service";
import AuthService from "../services/auth.service";
import GameBoardGames from './game-board-games.component'
import Timer from './timer.component'


const Game = () => {
    const [idGame, setIdGame] = useState({});
    let idJugador = 0;
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();

    let data = { idGame: idGame, idJugador: idJugador };

    let newIdJugador = () => {
        const id_juego = data.idGame.id_juego;
        const username = currentUser.username;
        console.log(id_juego);
        console.log(username);
        GameService.newJugadorJuego(id_juego, username)
        .then(response => {
            console.log("Entro al Nuego Juego");
            console.log(response.data);
            navigate('/user', { state: { idGame: idGame, idJugador: response.data.id_jugador } })
            idJugador = response.data.id_jugador;
            
            console.log(idJugador)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        
    }, [])

    return (
        <>
            <div>
                <h1>Welcome to Boggle</h1>
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
                        onClick={() => {
                            newIdJugador();
                            
                        }}>
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