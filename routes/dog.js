var express = require('express')
var router = express.Router();
var dogCtrl = require('../controllers/dog');

router.get('/user/newdog',isLoggedIn, function (req, res) {
  res.render('dogs/createDog', { user: req.user })
});//creates adddog page

router.get('/user/mydogs', isLoggedIn, dogCtrl.index);

router.post('/users/:id/dogs', isLoggedIn , dogCtrl.newDog);
router.get('/users/mydogs', isLoggedIn , dogCtrl.index);
//input name and breed.
//push information to index?

router.delete('/user/:id/dog/:id', isLoggedIn , dogCtrl.removeDog);

//will be set to a button, on the mydogs page
function isLoggedIn(req, res, next){
    if(req.isAuthenticated() )return next();
      res.redirect('/auth/google');
  };

module.exports = router

