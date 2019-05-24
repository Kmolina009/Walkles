const mongoose = require('mongoose');
//connect to Mongodb Atlas
process.env.DATABASE_URL

mongoose.connect('mongodb://localhost:3000/Project-Two',
{useNewURLParser: true}
);

mongoose.connection.on(connection, () => {
    console.log("Connected to Mongodb")
})