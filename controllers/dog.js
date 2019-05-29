var Dog = require('./model/dog');

module.exports = {
    new:newDog/*,
    removeDog,
    updateDog*/

}

function addDog(req, res){

    Dog.create(req.body, function(err, dog){
        Dog.save( err => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(addDog)

        })
        res.redirect('../veiws/user/newdog')
    });
};
