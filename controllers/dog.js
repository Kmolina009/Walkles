var Dog = require('../models/dog');

module.exports = {
    newDog,
    removeDog
    // updateDog,
    // showAllDog,
    // showOneDog
}

function newDog(req, res){

    Dog.create(req.body, function(err, dog){
        Dog.save( err => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(addDog)
        })
        res.redirect('../veiws/index')
    });
};

function removeDog(req, res){
    Dog.findByIdAndRemove(req.params.dogId,(err, dog) =>{
        if (err) return res.status(500).send(err);
        const response = {
            message: "Successfully Delete!",
            id: dog._id
        };
        return res.status(200).send(removeDog)
    });

};

// function update (req, res){
//     Dog.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new:true},
//         (err, dog) =>{
//             if(err) return res.status(500).send(err)
            
//         }
//     )
// }