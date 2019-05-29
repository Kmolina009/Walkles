const mongoose= require('mongoose')
// const userSchema = require('./user')
const Schema = mongoose.Schema;

const dogSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    breed:{
        type:String,
        required:true
    },
    date:Date
    // walks:Array
});

module.exports = mongoose.model("Dog", dogSchema)