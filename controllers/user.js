var User = require('../models/user');
var Dog = require('../models/dog')

module.exports = {
    index
  };
  
  function index(req, res, next) {
      res.render('index', { 
          user : req.user ? req.user : null 
    });
  }


//create dog
//have it link to the add-dog.ejs
//have information render inside table on ./veiws/user/indexß