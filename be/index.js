require('dotenv').config();
const express  = require('express');
const app = express();

const mongoClient = require('./db');

const APP_PORT = 3000;

app.use(express.json());
const apiRouter = require('./routes/apiRouter');
app.use('/v1/api/', apiRouter);

(async () => {
  try {
    await mongoClient.connect();
    app.listen(APP_PORT);
    console.log('Server has been started');
  } catch(err) {
    return console.log('App start error: ', err);
  }
})();

// press ctrl-c
process.on('SIGINT', async() => {
  await mongoClient.close();
  console.log('Server stopped');
  process.exit();
})
