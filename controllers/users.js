var User = require('../models/user');
var Dog = require('../models/dog')
module.exports={
    index,
    new:newDog
};

function index(req, res, next){
    res.render('user/index',{
        // User,
        // user:req.user
        // name:req.query.name,
        // sortKey
    })
};

function addDog(req, res){

    Dog.create(req.body, function(err, dog){
        Dog.save( err => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(addDog)

        })
        res.redirect('../veiws/user/newdog')
    });
};
//create dog
//have it link to the add-dog.ejs
//have information render inside table on ./veiws/user/index