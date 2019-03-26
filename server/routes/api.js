import express from 'express';

const Api = express.Router();

Api.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

export default Api;
