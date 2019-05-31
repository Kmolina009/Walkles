const mongoose= require('mongoose')
const userSchema = require('./user')
const Schema = mongoose.Schema;

const dogSchema = new Schema ({
    name:String,
    breed:String,
    link:"/dogs/doginfo"
    },{ 
    timestamp:true
});
//not sure if this will work
module.exports = mongoose.model("Dog", dogSchema);