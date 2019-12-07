import MovieService from '../../src/app/services/MovieService';

import movies from '../mocks/movies';
import moviesSorted from '../mocks/moviesSorted';
import championshipStructure from '../mocks/championshipStructure';
import winners from '../mocks/winners';

describe('ChampionshipService', () => {
  const movieService = new MovieService();

  it('should return movies sorted', async () => {
    const result = movieService.sortMovieList(movies);

    expect(result).toEqual(moviesSorted);
  });

  it('should return create championship structure', async () => {
    const result = movieService.createChampionshipStructure(moviesSorted);

    expect(result).toEqual(championshipStructure);
  });

  it('should compare two movies and returns the highest rated movie', () => {
    const movieA = { nota: 2, titulo: 'movieA' };
    const movieB = { nota: 9, titulo: 'movieB' };

    const result = movieService.compareTwoMovies(movieA, movieB);

    expect(result).toEqual(movieB);
  });

  it('should compare two movies with the same rate and returns the movie in alphabetical order', () => {
    const movieA = { nota: 9, titulo: 'movieA' };
    const movieB = { nota: 9, titulo: 'movieB' };

    const result = movieService.compareTwoMovies(movieA, movieB);

    expect(result).toEqual(movieA);
  });

  it('should return a object with winner and vice winner', () => {
    const result = movieService.getChampionshipResult(championshipStructure);

    expect(result).toEqual(winners);
  });
});
