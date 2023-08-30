import React, { Component } from "react";
import { withRouter } from '../common/with-router';
import GameBoard from './game-board.component';
import GameBoardTracking from './game-board-tracking.component';

class BoardUser extends Component {
 
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                      <h1>Boggle 5 x 5</h1>
                      Game No 1721.
                    </div>
                    <div className="col text-right">
                      <h1>Time left: 2.27</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-5 col">
                        <GameBoard />
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
}

export default withRouter(BoardUser);