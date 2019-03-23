import express from 'express';

const Index = express.Router();

Index.get('/', (req, res) => {
  res.render('index');
});

export default Index;
