var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI ||  'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
console.log('process.env.MONGODB_URI : ' + process.env.MONGOLAB_URI);
module.exports = {mongoose};
