const mongoose= require('mongoose')
const Schema = mongoose.schema

const dogSchema = new Schema ({
    name:String,
    breed:String,
    owner:ObjectId,
    date:Date,
    walks:Array
})

module.exports =('Dog', dogSchema)