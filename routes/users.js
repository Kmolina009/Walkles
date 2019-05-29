var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users')
/* GET users listing. */
//Routes listen for stuff, think dom
//user's landing page

router.get('/user', userCtrl.index);

router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/')
});
function isLoggedIn(req, res, next){
  if(req.isAuthenticated() )return next();
    res.redirect('/auth/google');
}
module.exports = router;
