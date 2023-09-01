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

  newGame(tipo) {
    return axios.post(API_URL + "juego_nuevo", { tipo }, { headers: authHeader() });
  }

  newJugadorJuego(id_juego, jugador) {
    return axios.post(API_URL + "jugador_juego", { id_juego, jugador }, { headers: authHeader() });
  }

  newJugada(id_jugador, juego, jugada) {
    console.log(id_jugador.id_jugador)
    console.log(juego.juego)
    console.log(jugada.jugada)
    console.log("entro");
    return axios.post(API_URL + "jugadas_post", { id_jugador, juego, jugada }, { headers: authHeader() });
  }

  getListaJugadas(id_juego) {
    const config = {
      headers: authHeader(),
      params: { id_juego: id_juego}
    }
    return axios.get(API_URL + 'jugadas_lista', config);
  }

}

export default new GameService();
