var express = require('express');
var router = express.Router();

/* GET users listing. */
//user's landing page
router.get('/user/index', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/')
});

module.exports = router;
