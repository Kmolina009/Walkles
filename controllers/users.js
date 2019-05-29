var User = require('../models/user');
var Dog = require('../models/dog')
module.exports={
    index,
   
};

function index(req, res, next){
    res.render('user/index',{
        // User,
        // user:req.user
        // name:req.query.name,
        // sortKey
    })
};


//create dog
//have it link to the add-dog.ejs
//have information render inside table on ./veiws/user/index