import express from 'express';
import path from 'path';
import routes from './routes/index';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), app.get('ip'), () => {
  console.log(`Server is running on port 3000`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('message', { roger: 'hey how are you?' });
  socket.on('another event', (data) => {
    console.log(data);
  });
});

module.exports = app;
