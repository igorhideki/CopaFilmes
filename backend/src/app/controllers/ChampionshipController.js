import MovieService from '../services/MovieService';

class ChampionshipController {
  start(req, res) {
    const { movies } = req.body;

    if (movies && movies.length !== 8) {
      return res
        .status(400)
        .json({ message: 'Provide 8 movies to start championship' });
    }

    const movieService = new MovieService();
    const championshipResult = movieService.startChampionship(movies);

    return res.json(championshipResult);
  }
}

export default new ChampionshipController();
