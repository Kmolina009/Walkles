const mongoose= require('mongoose')
const userSchema = require('./user')
const Schema = mongoose.Schema;

const dogSchema = new Schema ({
    name:String,
    breed:String    
    },{ 
    timestamp:true
});

module.exports = mongoose.model("Dog", dogSchema);