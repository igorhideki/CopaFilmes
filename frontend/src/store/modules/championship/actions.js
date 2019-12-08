export function addMovie(movie) {
  return {
    type: '@mchampionship/ADD_MOVIE',
    payload: { movie },
  };
}
