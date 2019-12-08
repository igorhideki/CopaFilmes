export function addMovie(movie) {
  return {
    type: '@championship/ADD_MOVIE',
    payload: { movie },
  };
}
