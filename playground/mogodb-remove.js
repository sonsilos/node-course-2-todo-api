var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');
var {ObjectID} = require('mongodb');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove({text: '"sonsilos@gmail.com'}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5c2b9bc396ef7b8938f3fa18').then((result)=>{
    console.log(result);
});