var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user')
/* GET users listing. */
//Routes listen for stuff, think dom
//user's landing page

router.get('/user', userCtrl.index);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated() )return next();
    res.redirect('/auth/google');
}
module.exports = router;
