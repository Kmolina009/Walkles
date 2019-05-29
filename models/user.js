const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{
        type:String,
        required:true
        },
    email:{
        type:String,
        required:true
            },
    dog:{
        type:Array
        },
    Walker:{
        type:Boolean,
        default:false
    },
    googleId:{type:String}
     });

module.exports= mongoose.model('User', userSchema)