import axios from 'axios';

export const FETCH_DETAILS = 'FETCH_DETAILS';

export function fetchMovieDetail(id) {
  const API_KEY = '?api_key=78733b7b6ef294467927d92bb7a7d9a4';
  const ROOT_URL = `https://api.themoviedb.org/3/movie/${id}${API_KEY}&language=en-US`
  
  const request = axios.get(ROOT_URL);
  
  return {
    type: FETCH_DETAILS,
    payload: request
  };

}
