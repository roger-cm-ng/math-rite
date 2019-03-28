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
server.listen(app.get('port'), app.get('ip'), () => {
  console.log(`Server is running on port ${port}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/api', api);

// const MongoClient = require('mongodb').MongoClient;
//
// const uri = 'mongodb+srv://roger:Clu5t3rU53r@scrum-vt9vg.gcp.mongodb.net/test?retryWrites=true';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err, client) => {
//    if(err) {
//      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//   const collection = client.db('db').collection('users');
//   collection.find({}).toArray(function(err, docs) {
//     console.log("Found the following records");
//     console.log(docs);
//     users = docs;
//   });
// });
//
// io.on('connection', (socket) => {
//   console.log('user connected');
//   socket.emit('message', { roger: 'hey how are you?' });
//   socket.on('another event', (data) => {
//     console.log(data);
//   });
// });

module.exports = app;
