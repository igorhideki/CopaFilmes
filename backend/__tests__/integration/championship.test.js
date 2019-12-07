import request from 'supertest';
import app from '../../src/app';

import movies from '../mocks/movies';

describe('ChampionshipController', () => {
  it('should return success when provide 8 movies', async () => {
    const response = await request(app)
      .post('/championship')
      .send({ movies });

    expect(response.status).toBe(200);
  });

  it('should return error when provide less or more than 8 movies', async () => {
    const response = await request(app)
      .post('/championship')
      .send({ movies: [] });

    expect(response.status).toBe(400);
  });
});
