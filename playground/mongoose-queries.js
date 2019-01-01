const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5c2b7c6d986df26e2c7f186d';

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todos',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo)
//         return  console.log('ID not found ');

//     console.log('Todos by ID : ',todo);
// }).catch((e)=>{
//     console.log(e);
// });

User.find({
    _id: id
}).then((users)=>{
    if(users.length ==0)
        return  console.log('ID not found ');

    console.log('Todos',users);
});

User.findById(id).then((todo)=>{
    if(!todo)
        return  console.log('ID not found ');

    console.log('User by ID : ',todo);
}).catch((e)=>{
    console.log(e);
});