var express = require('express')
var router = express.Router();
var dogCtrl = require('../controllers/dog');

router.get('/user/newdog',isLoggedIn, function (req, res) {
  res.render('dogs/createDog', { user: req.user })
});//creates adddog page

router.get('/user/mydogs', isLoggedIn, dogCtrl.index);

router.post('/users/:id/dogs', isLoggedIn , dogCtrl.newDog);
// router.get('/users/:id/mydogs', isLoggedIn , function(req, res) {
//   res.render('dog/:id/doginfo', {user: req.user})
// });
//input name and breed.
//push information to index?
router.get('/dog/myDogs',function(req, res){
    dogCtrl.showOneDog.res.render('/dog/doginfo', {link:"<a href ='/dogs/:id/doginfo/'> class=\"btn btn primary\" role=\"button\">update</a>"});
}); 
//creates a link for the selected dog
router.delete('/user/:id/dog/:id', isLoggedIn , dogCtrl.removeDog);

//will be set to a button, on the mydogs page
function isLoggedIn(req, res, next){
    if(req.isAuthenticated() )return next();
      res.redirect('/auth/google');
  };

  

module.exports = router

