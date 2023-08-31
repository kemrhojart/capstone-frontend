import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

class GameService {
  
  getAllAvalaibleGames(tipo) {
    const config = {
      headers: authHeader(),
      params: { tipo: tipo.boardType}
    }
    return axios.get(API_URL + 'juegos', config);
  }

  /*newGame(tipo) {
    return axios.post(API_URL + "juego_nuevo", {
     { tipo }
    }
    
    );
  }*/

}

export default new GameService();
