const INITIAL_STATE = {
  moviesSelected: [],
  winners: {},
};

export default function championship(state = INITIAL_STATE, action) {
  const hasMovieSelected = state.moviesSelected.find(
    movie => action.payload.movie.id === movie.id
  );

  switch (action.type) {
    case '@championship/ADD_MOVIE':
      if (hasMovieSelected) {
        return {
          ...state,
          moviesSelected: state.moviesSelected.filter(
            movie => action.payload.movie.id !== movie.id
          ),
        };
      }

      if (state.moviesSelected.length === 8) {
        return state;
      }

      return {
        ...state,
        moviesSelected: [...state.moviesSelected, action.payload.movie],
      };
    default:
      return state;
  }
}
