var mongoose = require('mongoose')
//Establishing connection with mongodb
console.log("connect to:" + process.env.MONGODB_CONNECT);
var options = {}
mongoose.connect('mongodb://' + process.env.MONGODB_CONNECT, options, function(error) {
  console.log("Error connecting:" + error);
});

require('./../model/userDetails.js');