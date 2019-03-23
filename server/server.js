import express from 'express';
import path from 'path';

import routes from './routes/index';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

module.exports = app;
