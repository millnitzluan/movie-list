import axios from 'axios';

const API_KEY = '?api_key=78733b7b6ef294467927d92bb7a7d9a4';
const ROOT_URL = `https://api.themoviedb.org/3/movie/upcoming${API_KEY}&language=en-US`;

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_MOVIES,
    payload: request
  };

}
