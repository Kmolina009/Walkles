var express = require('express')
var router = express.Router();
var dogCtrl = require('../controllers/dog');

router.post('/:id/dog', isLoggedIn , dogCtrl.newDog);
router.delete('/:id/dog/:id', isLoggedIn , dogCtrl.removeDog);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated() )return next();
      res.redirect('/auth/google');
  };


module.exports = router

