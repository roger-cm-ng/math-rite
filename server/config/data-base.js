// import mongodb from 'mongodb';

export default class dataBase {
  // static dataBaseClient;
  //
  // static isConnected = false;
  //
  // static init() {
  //   const { MongoClient } = mongodb;
  //   const uri = '<mongo-uri>';
  //   this.dataBaseClient = new MongoClient(uri, { useNewUrlParser: true });
  //   this.dataBaseClient.connect((err) => {
  //     if (err) {
  //       throw new Error('Error occurred while connecting to MongoDB Atlas...\n', err);
  //     } else {
  //       this.isConnected = true;
  //     }
  //   });
  // }
  //
  // static getUser(cred, success, fail) {
  //   if (!this.isConnected) {
  //     throw new Error('Error occurred while connecting to MongoDB Atlas...');
  //   }
  //
  //   this.dataBaseClient.connect((err, client) => {
  //     const collection = client.db('db').collection('users');
  //     collection.find(cred).toArray((collectionErr, doc) => {
  //       if (collectionErr) {
  //         fail(403, { message: 'dB error' });
  //       } else if (doc.length === 0) {
  //         fail(404, { message: 'Not found' });
  //       } else {
  //         const { email, initial, color } = doc[0];
  //         success({
  //           email,
  //           initial,
  //           color
  //         });
  //       }
  //     });
  //   });
  // }
}
