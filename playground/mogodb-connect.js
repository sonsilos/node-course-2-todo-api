const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var user = {name: 'sonsilos', age: 25};
var {name} = user;
console.log(name);

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
//   db.collection('Todos').insertOne({
//     text: 'sonething to do',
//     complete: false
//   }, (err, result) =>{
//     if (err){
//         return console.log('Unable to insert todo', err);
//     }

//     console.log(JSON.stringify(result.ops,undefined,2));
//   });

  db.collection('Users').insertOne({
    name: 'sonilos',
    age: 25,
    location: 'Thailand'
  }, (err, result) =>{
    if (err){
        return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  });

//   insertDocuments(db, function() {
//     client.close();
//   });
});