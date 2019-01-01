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

  db.collection('Users').find({ _id: 123}).toArray().then((docs) =>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));

  } , (err) =>{
    if (err){
        return console.log('Unable to find Todos', err);
    }


  });

//   insertDocuments(db, function() {
//     client.close();
//   });
});