const mongoose = require('mongoose');
const keys = require('./config/keys.js');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const databaseConnection = mongoose.connection;
databaseConnection.on('error',console.error.bind(console, 'connection error:'));
databaseConnection.once('open', function(){
    console.log("connection is open!")
});

const kittySchema = new mongoose.Schema({
    name: String
  });

kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
const Kitten = mongoose.model('Kitten', kittySchema);

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();

// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

Kitten.find({ name: /^fluff/ });