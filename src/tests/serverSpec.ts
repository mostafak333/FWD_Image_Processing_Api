import supertest from 'supertest';
import app from '../server';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test responses from endpoints', (): void => {
  describe('endpoint: /', (): void => {
    it('gets / (<< Main Router >>)', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('endpoint: /image/resize', (): void => {
    it('gets /image/resize?name=fjord&width=100&high=100 (<< valid parameters >>)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/image/resize?name=fjord&width=500&high=500'
      );
      expect(response.status).toBe(200);
    });
    it('gets /image/resize (Name & width & high not assigned << invalid parameters >>)', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/image/resize');
      expect(response.status).toBe(200);
    });
    it('gets /image/resize?name=fjord (both width & high not assigned << invalid parameters >>)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/image/resize?name=fjord'
      );
      expect(response.status).toBe(200);
    });

    it('gets /image/resize?name=fjord&width=-200&high=200 (width assigned with nigative number << invalid parameters >>)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/image/resize?name=fjord&width=-200&high=200'
      );
      expect(response.status).toBe(200);
    });

    it('gets /image/resize?name=fjor&width=300&high=300 (the name of photo not exsists in images folder << invalid parameters >>)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/image/resize?name=fjor&width=300&high=300'
      );
      expect(response.status).toBe(200);
    });
  });

  describe('endpoint: /example', (): void => {
    it('returns 404 for invalid endpoint', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/example');

      expect(response.status).toBe(404);
    });
  });
});
