const http = require('http');
const request = require('supertest');

const app = require('../index');

describe('Testing on /items endpoints', () => {
  var server;
  // Called once before any of the tests in this block begin.
  before( (done) => { 
    server = http.createServer(app);

    server.listen( (error) => {
      if (error) { return done(error); }
      done();
    });
  });
  // GET /items
  it('GET /items should return with a JSON object and 200 status', (done) => {
    request(app)
      .get('/items')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });
  // POST /items 
  it('POST /items should return with a JSON object and 201 status', (done) => {
    request(app)
      .post('/items')
      .send({
        name: "some name",
        address: "some address",
        hospital: "some hospital",
        date: "some date",
        amount: "some amount"
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .end(done);
  });
  it('POST /items should return with 400 status', (done) => {
    request(app)
      .post('/items')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400)
      .end(done);
  });

  // Called after all tests are run
  after( (done) => {
    console.log('All tests done!');
    server.close();
    done();
  });
});