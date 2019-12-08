export function addMovie(movie) {
  return {
    type: '@championship/ADD_MOVIE',
    payload: { movie },
  };
}

export function startChampionshipRequest(moviesSelected) {
  return {
    type: '@championship/START_REQUEST',
    payload: { moviesSelected },
  };
}

export function startChampionshipSuccess(winners) {
  return {
    type: '@championship/START_SUCCESS',
    payload: { winners },
  };
}

export function resetChampionship() {
  return {
    type: '@championship/RESET',
  };
}
