import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ messege: 'Copa filmes' }));

export default routes;
