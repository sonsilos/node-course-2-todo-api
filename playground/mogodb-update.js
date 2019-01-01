const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);


  db.collection('Users').findOneAndUpdate({ name: 'sonilos'} , { $set: { age: '5' },$inc: {age : 1} }, { returnOriginal: false }, function(err, doc) {
    console.log('Users');
    console.log(JSON.stringify(doc,undefined,2));
  });


  // db.collection('Todos').findOneAndUpdate({ text: 'Eat lunch'} , { $set: { completed: true } }, { returnOriginal: false }).then((result) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(result,undefined,2));
  // });
//   insertDocuments(db, function() {
//     client.close();
//   });
});