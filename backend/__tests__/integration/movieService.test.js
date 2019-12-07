import MovieService from '../../src/app/services/MovieService';

import movies from '../mocks/movies';
import moviesSorted from '../mocks/moviesSorted';
import championshipStructure from '../mocks/championshipStructure';

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
});
