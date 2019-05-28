var User = require('./model/user');
module.exports={
    index
};
function index(req, res, next){
    res.render('user/index'),{
        User,
        user:req.user,
        name:req.query.name,
        sortKey
    }
    //
    //if user is a walker redirect to walker/index
    //if user is User, redirect to user/index
};