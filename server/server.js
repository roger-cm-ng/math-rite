import express from 'express';
import path from 'path';
import routes from './routes/index';

const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

io.on('connection', function(socket){
  console.log('a user connected');
});

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

module.exports = app;
