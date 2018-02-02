import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie_list';
import MovieDetailsReducer from './reducer_movie_details';

const rootReducer = combineReducers({
  movie: MovieReducer,
  movieDetail: MovieDetailsReducer
});

export default rootReducer;
