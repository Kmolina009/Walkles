var express = require('express');
var router = express.Router();
var dogCtrl = require('../controller/dog');

//
router.post('/dog', dogCtrl.add);
router.delete('/dog/:id', dogCtrl.delete);

