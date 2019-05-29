const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkSchema = new Schema ({
    user:{
        type:[ObjectId],
        required:true
    },
    walker:{
        type:[ObjectId],
        required:true
    },//walker is user, I need to create the walker boolean
    dog:{
        type:[ObjectId],
        required: true
    },
    date:Date
}, {
        timestamp:true
    });

module.exports=mongoose.model("Walk", walkSchema)