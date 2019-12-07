import api from '../../services/api';

class MovieController {
  async index(req, res) {
    try {
      const response = await api.get('/filmes');

      return res.json(response.data);
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Failed to request movies in external API' });
    }
  }
}

export default new MovieController();
