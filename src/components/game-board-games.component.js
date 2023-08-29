import React, { Component } from "react";
import { withRouter } from '../common/with-router';

class GameBoardGames extends Component {
 
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">
                    Board 5 x 5
                    </h2>
                </div>                    
                <table className="table-hover">
                    <tbody>
                        <tr>
                            <td>Juego 1675 (1) - Abierto</td>
                        </tr>
                        <tr>
                            <td>Juego 8025 (2) - Iniciando</td>
                        </tr>
                        <tr>
                            <td>Juego 9001 (0)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(GameBoardGames);