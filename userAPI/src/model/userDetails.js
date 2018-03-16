var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userData= new Schema({
username:String,
address:String
});

var User = mongoose.model('User',userData);
module.exports = User;
