var express = require('express')
var router = express.Router();
var dogCtrl = require('../controllers/dog');

router.get('/user/dog',isLoggedIn, function (req, res) {
  res.render('dogs/index', { user: req.user })
});

// router.get('/user/dog',isLoggedIn,dogCtrl.index);
router.post('/user/:id/dog', isLoggedIn , dogCtrl.newDog);
router.delete('/user/:id/dog/:id', isLoggedIn , dogCtrl.removeDog);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated() )return next();
      res.redirect('/auth/google');
  };

module.exports = router

