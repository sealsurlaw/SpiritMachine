let express = require('express');
let router = express.Router();
let axios = require('axios');
let shell = require('shell-exec');
let hex64 = require('hex64');

// Pour Alcohol
router.get('/alcohol/:number', function (req, res, next) {
    let number = req.params.number;

    // Run python script to pour alcohol
    shell(`python ~/Programming/SpiritMachine/python/alcohol.py ${number}`)
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
    let time;

    switch (parseInt(number)) {
        case 0:
            time = 5.0;
            break;
        case 1:
            time = 5.0;
            break;
        case 2:
            time = 5.0;
            break;
        case 3:
            time = 5.0;
            break;
        default:
            time = 5.0;
    }

    // Run python script to pour alcohol
    shell(`python ~/Programming/SpiritMachine/python/mixers.py ${number} ${time}`)
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
