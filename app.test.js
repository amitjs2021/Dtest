import app from './app.js';
import request from 'supertest';
import mockFS from 'mock-fs';

beforeAll(() => {
  mockFS({
    'static/test.css': `body {}`,
  })
});

afterAll(() => {
  mockFS.restore();
});

describe(`Serves up the SPA`, () => {
  test(`It responds to GET /`, done => {
    request(app).get(`/`)
      .expect(200)
      .end(done);
  });
  test(`It serves static assets`, done => {
    request(app)
      .get('/test.css')
      .expect(200, `body {}`)
      .end(done);
  })
});
