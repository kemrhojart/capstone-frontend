import GameBoardGames from './game-board-games.component'

const Game = () => {
        return (
            <>
                <div>
                    <h1>Welcome to Boogle</h1>
                    Select a game
                </div>
                <div className="mt-3 row">
                    <div id="Board5x5" className="col">
                        <GameBoardGames boardType = "5x5"/>
                        <div className="form-group">
                            <button className="btn btn-primary">New</button>
                        </div>
                    </div>
                    <div id="Board4x4" className="col">
                        <GameBoardGames boardType = "4x4"/>
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
            </>
        )
}

export default Game;