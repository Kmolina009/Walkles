const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkSchema = new Schema ({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    walker:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dog:{
        type: Schema.Types.ObjectId,
        ref: 'Dog'
    },
    date:Date
}, {
        timestamp:true
    });

module.exports=mongoose.model("Walk", walkSchema)