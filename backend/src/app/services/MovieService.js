export default class MovieService {
  sortMovieList(movies) {
    const moviesSorted = movies.sort((movieA, movieB) => {
      if (movieA.titulo < movieB.titulo) {
        return -1;
      }

      if (movieA.titulo === movieB.titulo) {
        return 0;
      }

      return 1;
    });

    return moviesSorted;
  }
}
