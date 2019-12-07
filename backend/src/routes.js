import { Router } from 'express';

import MovieController from './app/controllers/MovieController';

const routes = Router();

routes.get('/', (req, res) => res.json({ messege: 'Copa filmes' }));

routes.get('/movies', MovieController.index);

export default routes;
