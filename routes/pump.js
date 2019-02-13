var express = require('express');
var router = express.Router();
var axios = require('axios');
var shell = require('shell-exec');
var hex64 = require('hex64');

/* GET nfc data. */
router.get('/:numMotor', function (req, res, next) {
    var numMotor = req.params.numMotor;


    // TODO Call python file to get NFC data
    shell('sudo python3 /home/pi/Programming/SpiritMachine-Motors/motors.py ' + numMotor)
        //shell('echo NFC has been disabled')
        .then(out => {

            var nfcData = out.stdout;
            nfcData = hex64.decode(nfcData);

            res.json({ data: nfcData });
        })
        .catch(err => {
            console.log(err);
        });

});

module.exports = router;
