import { toast } from 'react-toastify';

const INITIAL_STATE = {
  moviesSelected: [],
  winners: {},
};

export default function championship(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@championship/ADD_MOVIE': {
      const hasMovieSelected = state.moviesSelected.find(
        movie => action.payload.movie.id === movie.id
      );

      if (hasMovieSelected) {
        return {
          ...state,
          moviesSelected: state.moviesSelected.filter(
            movie => action.payload.movie.id !== movie.id
          ),
        };
      }

      if (state.moviesSelected.length === 8) {
        toast.warning(
          'Apenas 8 filmes são permitidos para gerar um campeonato!'
        );
        return state;
      }

      return {
        ...state,
        moviesSelected: [...state.moviesSelected, action.payload.movie],
      };
    }
    case '@championship/START_SUCCESS': {
      return { ...state, winners: action.payload.winners };
    }
    case '@championship/RESET': {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
