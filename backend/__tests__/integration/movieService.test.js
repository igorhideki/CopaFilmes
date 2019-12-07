import MovieService from '../../src/app/services/MovieService';

import movies from '../mocks/movies';
import moviesSorted from '../mocks/moviesSorted';

describe('ChampionshipService', () => {
  const movieService = new MovieService();

  it('should return movies sorted', async () => {
    const result = movieService.sortMovieList(movies);

    expect(result).toEqual(moviesSorted);
  });
});
