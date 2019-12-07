import MovieService from '../../src/app/services/MovieService';

import movies from '../mocks/movies';
import movieNamesSorted from '../mocks/movieNamesSorted';

describe('ChampionshipService', () => {
  const movieService = new MovieService();

  it('should return movies sorted', async () => {
    const moviesSorted = movieService.sortMovieList(movies);
    const result = moviesSorted.map(movie => movie.titulo);

    expect(result).toEqual(movieNamesSorted);
  });
});
