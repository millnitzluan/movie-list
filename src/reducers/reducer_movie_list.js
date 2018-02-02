import { FETCH_MOVIES } from '../actions/action_movie_list';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return [ action.payload.data, ...state ];
  }
  return state;
}