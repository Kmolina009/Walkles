var Dog = require('../models/dog');

module.exports = {
    newDog,
    removeDog,
    updateDog,
    index,
    showOneDog
}

function newDog(req, res) {
    // mongo db query
    let newDog = new Dog(req.body);
        newDog.save((err, dog) => {
            if (err) {
            res.send(err);
            } else {
            console.log(res.json(dog))
            res.redirect('/dog/index')
            }
        })
}

function removeDog(req, res) {
     // mongo db query
    // redirect to view via URL
};

function updateDog(req, res) {
 // mongo db query
    // redirect to view via URL
};

function index(req, res ) {
 // mongo db query


 };
    // redirect to view via URL

function showOneDog(req, res ) {
 // mongo db query
    // redirect to view via URL
};