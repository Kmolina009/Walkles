const mongoose= require('mongoose');
const Dog = require('../models/dog')

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
        type: Schema.Types.ObjectId, 
        ref: "Dog"
        },
    Walker:{
        type:Boolean,
        default:false
    },
    googleId: String
     });

module.exports= mongoose.model('User', userSchema)