var express = require('express');
var router = express.Router();
var axios = require('axios');
var shell = require('shell-exec');
var hex64 = require('hex64');

/* GET nfc data. */
router.get('/card', function (req, res, next) {

    // TODO Call python file to get NFC data
    shell('sudo python /home/pi/Programming/MFRC522-python/Read.py')
        //shell('echo NFC has been disabled')
        .then(out => {

            var nfcData = out.stdout;
            nfcData = hex64.decode(nfcData);

            res.send(nfcData);
        })
        .catch(err => {
            console.log(err);
        });

});

// Send NFC data to remote server
router.get('/money/:nfcData', function (req, res, next) {
    var nfcData = req.params.nfcData;

    // Get wallet balance from database
    axios.post('https://spirit-machine.herokuapp.com/wallet/' + nfcData)
        .then(jsonData => {
            console.log(jsonData);
            res.json(jsonData.data);
            //res.json({money: out.stdout})
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;
