import express from 'express';

const Api = express.Router();

Api.post('/auth', (req, res) => {
  if (req.body.pin === '9876') {
    res.status(200).json({
      authenticated: true,
      members: {}
    });
  } else {
    res.status(500).json({
      message: 'Invalid username or password'
    });
  }
});

export default Api;
