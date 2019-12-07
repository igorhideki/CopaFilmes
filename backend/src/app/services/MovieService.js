export default class MovieService {
  sortMovieList(movies) {
    const moviesSorted = movies.sort((movieA, movieB) => {
      if (movieA.titulo < movieB.titulo) {
        return -1;
      }

      return 1;
    });

    return moviesSorted;
  }

  createChampionshipStructure(movies) {
    const structure = [];
    const { length } = movies;

    for (let i = 0; i < length / 2; i += 1) {
      structure.push(movies[i], movies[length - 1 - i]);
    }

    return structure;
  }
}
