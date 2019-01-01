var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI ||  'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose};
