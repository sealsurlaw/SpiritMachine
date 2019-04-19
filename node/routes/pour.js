var express = require('express');
var router = express.Router();
var axios = require('axios');
var shell = require('shell-exec');
var hex64 = require('hex64');

// Pour Alcohol
router.get('/alcohol/:number', function (req, res, next) {
    var number = req.params.number;

    // Run python script to pour alcohol
    shell('sudo python /home/pi/Programming/SpiritMachine/python/old/flow2.py')
        .then(out => {
            console.log(out);
            res.send(out);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });

    //TEST Waste time and return something
    // setTimeout(() => res.send({ message: "Poured!" }), 2000);

});

// Pour Mixer
router.get('/mixer/:number', function (req, res, next) {
    var number = req.params.number;

    // Run python script to pour alcohol
    // shell('sudo python3 ../python/pourMixer.py ' + number)
    //     .then(out => {
    //         console.log(out);
    //         res.send(out);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.send(err);
    //     });

    //TEST Waste time and return something
    setTimeout(() => res.send({ message: "Poured!" }), 2000);

});

module.exports = router;
