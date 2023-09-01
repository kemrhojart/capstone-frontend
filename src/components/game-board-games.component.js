import { useEffect, useState } from "react";
import GameService from "../services/game.service";

const GameBoardGames = ({boardType, setIdGame}) => {
    const [games, setGames] = useState([]);

    const newGame = (type) => {
        GameService.newGame(type.boardType)
        .then(response => {
            fetchGame();
            setIdGame('1');
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    const fetchGame = () => {
        GameService.getAllAvalaibleGames({boardType})
        .then(response => {
            if(response.data.length > 0) {
                setGames(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchGame();
    }, [])

    return <>
        <div className="card">
                <div className="card-header">
                    <h2 className="text-center">
                    Board {boardType}
                    </h2>
                </div>                    
                <table className="table-hover">
                    <tbody>
                        {games.map((element, index) => {
                            return (
                                <tr key={index}
                                    onClick={() => {
                                        setIdGame(element);
                                    }}>
                                    <td>
                                        Juego No {element.id_juego} (0) - {element.estado}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
            <div className="form-group">
                <button className="btn btn-primary"
                    onClick={() => {
                        console.log({boardType});
                        newGame({boardType})
                    }}>New
                </button>
            </div>
    </>   
}

export default GameBoardGames;