import request from 'supertest';
import server from '../src/main';

describe('loading express', () => {
  let api;
  beforeEach(() => {
    api = request(server);
  });
  afterEach(() => {
    server.close();
  });
  it('responds to /', (done) => {
    api.get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      expect(res.body.message).toEqual('hello');
      done();
    });
  });
  it('404 everything else', (done) => {
    api.get('/foo/bar')
    .expect(404, done);
  });
});
