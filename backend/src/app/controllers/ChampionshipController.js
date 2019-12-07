class ChampionshipController {
  start(req, res) {
    const { movies } = req.body;

    if (movies && movies.length !== 8) {
      return res
        .status(400)
        .json({ message: 'Provide 8 movies to start championship' });
    }

    return res.json({});
  }
}

export default new ChampionshipController();
