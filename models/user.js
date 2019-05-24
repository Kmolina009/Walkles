const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{type:String},
    email:{type:String},
    dog:{type:Array},
    Walker:{
        type:Boolean,
        default:false
    },
    googleId:String
    });

module.exports= mongoose.model(User, userSchema)