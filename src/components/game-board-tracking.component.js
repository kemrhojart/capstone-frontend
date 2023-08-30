import React, { Component } from "react";
import { withRouter } from '../common/with-router';

const log = [];
log[0] = "Juego iniciado.";
log[1] = `Jairo ha buscado la palabra "perro"`;
log[2] = `Jairo obtuvo 0 puntos.`;
log[3] = `noobmaster acerto 3 puntos`;
log[4] = `Jairo ha buscado la palabra "res"`;
log[5] = `Jairo acerto 1 punto`;
log[6] = `Jairo ha buscado la palabra "cerca"`;
log[7] = `Jairo obtuvo 0 puntos.`;

class GameBoardTracking extends Component {
    render() {
        return (
        <div className="board-tracking">
            <table className="table-hover">
                <tbody>
                    {log.map((element, index) => 
                        <tr key={index}>
                            <td>{element}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        );
    }
}

export default withRouter(GameBoardTracking);