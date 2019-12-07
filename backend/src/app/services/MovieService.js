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

  getChampionshipResult(championshipStructure) {
    const { length } = championshipStructure;

    if (length > 2) {
      const currentStructure = [];

      for (let i = 0; i < length - 1; i += 2) {
        const movieA = championshipStructure[i];
        const movieB = championshipStructure[i + 1];
        currentStructure.push(this.compareTwoMovies(movieA, movieB));
      }

      return this.getChampionshipResult(currentStructure);
    }

    return {
      winner: championshipStructure[0],
      viceWinner: championshipStructure[1],
    };
  }

  startChampionship(movies) {
    const moviesSorted = this.sortMovieList(movies);
    const championshipStructure = this.createChampionshipStructure(
      moviesSorted
    );
    const winners = this.getChampionshipResult(championshipStructure);

    return winners;
  }
}
