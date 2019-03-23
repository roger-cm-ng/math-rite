import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import path from 'path';

import routes from './routes/index';

const app = express();
const server = http.Server(app);
const io = socketIo(server);
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/', routes);

io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('message', { roger: 'hey how are you?'});
  socket.on('another event', (data) => {
    console.log(data);
  });
});
