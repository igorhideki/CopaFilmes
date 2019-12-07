import { Router } from 'express';

import MovieController from './app/controllers/MovieController';
import ChampionshipController from './app/controllers/ChampionshipController';

const routes = Router();

routes.get('/', (req, res) => res.json({ messege: 'Copa filmes' }));

routes.get('/movies', MovieController.index);
routes.post('/championship', ChampionshipController.start);

export default routes;
