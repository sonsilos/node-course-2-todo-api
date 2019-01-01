const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String, color: String, age: Number });

const kitty = new Cat({ name: 'Zildjian',color: 'green', age: 3 });
kitty.save().then((res) => console.log('meow'), (e)=>{ console.log('Unabled to save', e)});