import React from "react";
import { useEffect, useState } from "react";

import GameService from "../services/game.service";

const GameBoardTracking = () => {
  const [log, setLog] = useState([]);
  const id_juego = 1;

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

export default GameBoardTracking;