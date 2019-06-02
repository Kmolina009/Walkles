
var Dog = require('../models/dog')
var User = require('../models/user')

module.exports = {
    newDog,
    removeDog,
    updateDog,
    index,
    showOneDog
}

function newDog(req, res) {
    Dog.create(req.body, function(err, dog){
        User.findByIdAndUpdate(req.user._id, {$push: {dogs: dog._id}}, {new: true}, function(err, user) {
            res.redirect('/')
        });
    });
}

function removeDog(req, res) {
//      // mongo db query
    Dog.deleteOne( 
        req.params.id,function(err, dog){
            user.dog.save(function(err){
                res.redirect('/')
            })
    })
};
//      //ask for user(_id)
//          // redirect to myDogs page, just updating with delete
//      })


function updateDog(req, res) {
 // mongo db query
    // redirect to view via URL
};

function index(req, res ) {
    User.findById(req.user._id).populate('dogs').exec(function(err, dogOwner){
        res.render('dogs/myDogs', {user: req.user, dogOwner})
    })
 };
    // redirect to view via URL

function showOneDog(req, res ) {
    Dog.findById(req.params.id, function(err, dog){
        res.render('dogs/doginfo', {dog , user: req.user});
        });
    }
