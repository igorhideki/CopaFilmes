import request from 'supertest';
import app from '../../src/app';

import movies from '../mocks/movies';
import winners from '../mocks/winners';

describe('ChampionshipController', () => {
  it('should return an object with winner and vice winner', async () => {
    const response = await request(app)
      .post('/championship')
      .send({ movies });

    expect(response.body).toEqual(winners);
  });

  it('should return error when provide less or more than 8 movies', async () => {
    const response = await request(app)
      .post('/championship')
      .send({ movies: [] });

    expect(response.status).toBe(400);
  });
});
