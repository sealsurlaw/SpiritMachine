let express = require('express');
let router = express.Router();
let axios = require('axios');
let shell = require('shell-exec');
let hex64 = require('hex64');

// Pour Alcohol
router.get('/alcohol/:number', function (req, res, next) {
    let number = req.params.number;

    // Run python script to pour alcohol
    shell('python ~/Programming/SpiritMachine/python/alcohol.py ' + number)
        .then(out => {
            console.log(out);
            res.send(out);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });

});

// Pour Mixer
router.get('/mixer/:number', function (req, res, next) {
    let number = req.params.number;

    // Run python script to pour alcohol
    shell('python ~/Programming/SpiritMachine/python/mixers.py ' + number)
        .then(out => {
            console.log(out);
            res.send(out);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });

});

module.exports = router;
