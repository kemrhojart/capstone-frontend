import { useEffect, useState } from "react";
import GameService from "../services/game.service";

const GameBoardGames = ({boardType}) => {
    const [games, setGames] = useState([]);
    
    const fetchGame = () => {
        console.log({boardType});
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
                            console.log("Proabdo");
                
                            return (
                                <tr key={index}>
                                    <td>Juego No {element.id_juego} (0) - {element.estado}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    </>   
}

export default GameBoardGames;