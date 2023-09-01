import React from "react";
import { useLocation } from "react-router-dom";

import GameService from "../services/game.service";
import GameBoard from './game-board.component';
import GameBoardTracking from './game-board-tracking.component';
import Timer from './timer.component'

const BoardUser = () => {
  const location = useLocation();
  const data = location.state;
  const jugada = 'prueba'
  const id_jugador = 1
  const juego = "A,L,A,N,R,E,U,R,F,F,S,I,T,D,S,S,C,A,N,O,T,N,E,N,C"//data.idGame.juego;

  const newJugada = (id_jugador, juego, jugada) => {
    GameService.newJugada({id_jugador}, {juego}, {jugada})
    .then(response => {
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
        <div className="row">
            <div className="col">
              <h1>Boggle {data.idGame.tipo}</h1>
              Game No {data.idGame.id_juego}.
            </div>
            <div className="col text-right">
              <h1>Time left: </h1>
              <Timer />
            </div>
        </div>
        <div className="row">
            <div className="mt-5 col">
                <GameBoard
                  juego = {data.idGame.juego}
                  tipo = {data.idGame.tipo}/>
                <div className="row">
                  <div className="mt-3 form-group col">
                    <input
                      type="text"
                      className="form-control"
                      name="keyWord"
                      placeholder="Enter a word"
                    />
                    <button className="mt-3 btn btn-primary col"
                      onClick={() => {
                        newJugada({id_jugador}, {juego}, {jugada})
                    }}>Send
                </button>
                  </div>
                </div>
            </div>
            <div className="col">
                <GameBoardTracking />
            </div>
        </div>
    </div>
);
}

export default BoardUser;