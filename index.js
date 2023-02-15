const http = require('http');
const express = require('express');
const config = require('./config');

const itemRouter = require('./routes/item');

// Configuration
const hostname = config.HOST || '127.0.0.1';
const port = config.PORT || 3000;

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error handling function
function errorHandler (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('There is something wrong... :<');
}

// Routes
app.get('/error', function(req, res){
  throw new Error('Try to debug this!');
});
app.use('/items', itemRouter);
app.use(errorHandler);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`🐕 Server running at http://${hostname}:${port}/ 🐕`)
});

module.exports = app;