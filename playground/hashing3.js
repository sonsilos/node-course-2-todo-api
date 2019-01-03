const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

bcrypt.genSalt(10, (err,salt)=>{
    bcrypt.hash(password,salt,(err, hash)=>{
        console.log(hash);
    })
});


var hashPassword = '$2a$10$e3HZXubtoDDK7bMuoUWQe.t7oUMpwzMkFt7.1Sy5ZfhI2jdcIPbGO';
bcrypt.compare( password ,hashPassword, (err,result)=>{
    console.log(result);
});