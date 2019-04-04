import express from 'express';
// import jwt from 'jsonwebtoken';
// import dataBase from '../config/data-base';

const Api = express.Router();

Api.post('/auth', (/* req, res */) => {
  // dataBase.getUser(
  //   req.body,
  //   (data) => {
  //     const { email } = data;
  //     jwt.sign(data, email, (err, token) => {
  //       res.status(200).json({
  //         token,
  //         ...data
  //       });
  //     });
  //   },
  //   (status, err) => {
  //     res.status(status).json(err);
  //   }
  // );
});

export default Api;
