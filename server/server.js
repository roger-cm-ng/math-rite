/* eslint-disable no-console */
import express from 'express';
import compression from 'compression';
import path from 'path';
import http from 'http';
// import socketIo from 'socket.io';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import index from './routes/index';
import api from './routes/api';
// import dataBase from './config/data-base';

const port = 3000;
const app = express();
const server = http.Server(app);
// const io = socketIo(server);

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || port);

// dataBase.init();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/api', api);

server.listen(app.get('port'), app.get('ip'), () => {
  console.log(`Server is running on port ${port}`);
});

// io.on('connection', (socket) => {
//   console.log('user connected');
//   socket.emit('message', { roger: 'hey how are you?' });
//   socket.on('another event', (data) => {
//     console.log(data);
//   });
// });

module.exports = app;
