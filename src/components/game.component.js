import React, { Component } from "react";
import { withRouter } from '../common/with-router';
import GameBoardGames from './game-board-games.component'

class Game extends Component {
 
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to Boogle</h1>
                    Select a game
                </div>
                <div className="mt-3 row">
                    <div className="col">
                        <GameBoardGames />
                        <div className="form-group">
                            <button className="btn btn-primary">New</button>
                        </div>
                    </div>
                    <div className="col">
                        <GameBoardGames />
                        <div className="form-group text-right">
                            <button className="btn btn-primary">New</button>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="form-group text-center">
                        <button className="btn btn-primary">Start</button>
                    </div>
                    <div className="card-header card-text-area text-center">
                        Iniciando: Tiempo estimado 60s
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Game);