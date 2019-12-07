import request from 'supertest';
import app from '../../src/app';

describe('MovieController', () => {
  it('should return an array', async () => {
    const response = await request(app).get('/movies');

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return an array with 16 elements', async () => {
    const response = await request(app).get('/movies');

    expect(response.body.length).toBe(16);
  });
});
