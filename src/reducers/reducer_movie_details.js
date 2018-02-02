import { FETCH_DETAILS } from '../actions/action_movie_detail';

export default function(state = [], action) {
  
  switch (action.type) {
    case FETCH_DETAILS:
      return [ action.payload.data, ...state ];
  }
  return state;
}