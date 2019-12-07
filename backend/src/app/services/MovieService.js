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

  createChampionshipStructure(moviesSorted) {
    const structure = [];
    const { length } = moviesSorted;

    for (let i = 0; i < length / 2; i += 1) {
      structure.push(moviesSorted[i], moviesSorted[length - 1 - i]);
    }

    return structure;
  }

  compareTwoMovies(movieA, movieB) {
    if (movieA.nota === movieB.nota) {
      const moviesSorted = this.sortMovieList([movieA, movieB]);

      return moviesSorted[0];
    }

    return movieA.nota > movieB.nota ? movieA : movieB;
  }

  getChampionshipResult(structure) {
    const { length } = structure;

    if (length > 2) {
      const currentStructure = [];

      for (let i = 0; i < length - 1; i += 2) {
        const movieA = structure[i];
        const movieB = structure[i + 1];
        currentStructure.push(this.compareTwoMovies(movieA, movieB));
      }

      return this.getChampionshipResult(currentStructure);
    }

    return {
      winner: structure[0],
      viceWinner: structure[1],
    };
  }
}
