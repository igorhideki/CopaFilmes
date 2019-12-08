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
          movies: [
            state.movies.filter(movie => action.payload.movie.id !== movie.id),
          ],
        };
      }

      return { ...state, movies: [...state.movies, action.payload.movie] };
    default:
      return state;
  }
}
