const http = require('http');
const express = require('express');

describe('Test /items', () => {
  before( () => { 
    const app = express();
    const server = http.createServer(app);
    
    server.listen(3000, (error) => {
      if (error) { return done(error); }
    });
  });
  after( () => {
    console.log('All tests done!');
  });
  // describe('Health check on /sync', () => {
  //   it('health should be okay', () => {
  //     const actualResult = healthCheckSync();
  //     expect(actualResult).to.equal('OK');
  //   });
  // });
});