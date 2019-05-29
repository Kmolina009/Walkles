const router = require('express').Router();
var passport= require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/user');
});

router.get('/auth/google', passport.authenticate(
  'google',
{ scope: ['profile','email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/user',
    failedRedirect: '/user' 
  }
));

router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/user')
});

module.exports = router;
