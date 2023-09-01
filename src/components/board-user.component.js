import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import GameService from "../services/game.service";
import GameBoard from './game-board.component';
import Timer from './timer.component'

const BoardUser = () => {
  const [jugada, setJugada] = useState('HOLA');
  const [log, setLog] = useState([]);
  const id_juego = 1;
  
  const location = useLocation();
  const data = location.state;
  const id_jugador = 1
  const juego = data.idGame.juego;

  const newJugada = (id_jugador, juego, jugada) => {
    GameService.newJugada(id_jugador, juego, jugada)
    .then(fetchLog())
    .catch(function (error) {
      console.log(error);
    });
  }

  const fetchLog = () => {
    GameService.getListaJugadas(id_juego)
    .then(response => {
        if(response.data.length > 0) {
          console.log(response.data);
          setLog(response.data);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  useEffect(() => {
    fetchLog();
  }, [])

  const GameBoardTracking = () => {
    return (
      <div className="board-tracking">
        <table className="table-hover">
          <tbody>
            {log.map((element, index) => 
              <tr key={index}>
                <td>La palabra "{element.jugada}" {element.observaciones}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
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
                  tipo = {data.idGame.tipo}
                  setJugada = {setJugada}/>
                <div className="row">
                  <div className="mt-3 form-group col">
                    <input
                      type="text"
                      className="form-control"
                      name="keyWord"
                      value={jugada}
                      onChange={(e) => setJugada(e.target.value)}
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