const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/Project-Two',
{ useNewUrlParser: true }
);

var db = mongoose.connection;

db.on('connected', function (){
    console.log(`Connected to Mongodb at ${db.host}:${db.port}`)
});

db.on('error', (error) => console.log(error));