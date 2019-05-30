const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
        },
    email: String,
    dogs:[{
        type:Schema.Types.ObjectId,
        ref:'Dog'
    }],
    Walker:{
        type:Boolean,
        default:false
    },
    googleId: String
     },{
         timestamps:true
});

module.exports= mongoose.model('User', userSchema);
