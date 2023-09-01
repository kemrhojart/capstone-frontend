import React, { Component, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GameBoard from './game-board.component';
import GameBoardTracking from './game-board-tracking.component';

const BoardUser = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
        <div className="row">
            <div className="col">
              <h1>Boggle {data.idGame.tipo}</h1>
              Game No {data.idGame.id_juego}.
            </div>
            <div className="col text-right">
              <h1>Time left: 2.27</h1>
            </div>
        </div>
        <div className="row">
            <div className="mt-5 col">
                <GameBoard juego = {data.idGame.juego}/>
                <div className="row">
                  <div className="mt-3 form-group col">
                    <input
                      type="text"
                      className="form-control"
                      name="keyWord"
                      placeholder="Enter a word"
                    />
                    <button className="mt-3 btn btn-primary col">Send</button>
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