var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();
const port = process.ENV.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  console.log(JSON.stringify(todo))
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
})


app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send({ detail: 'not found'});
  }

  Todo.findById(id).then((todo)=>{
   if(!todo){
    return res.status(404).send({ detail: 'not found'}); 
   }
    res.send({todo});
  },(e)=>{
    res.status(400).send(e);
  }).catch((e)=>{
      res.status(400);
      res.send({ detail: id + 'error' + e });
  });
})

app.post('/users', (req, res) => {
  var user = new User({
    email: req.body.email
  });

  console.log(JSON.stringify(user))
  user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log('Started on port '+ port);
});

module.exports = {app};