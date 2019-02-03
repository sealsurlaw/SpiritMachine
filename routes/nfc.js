var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET nfc data. */
router.get('/', function (req, res, next) {

    // TODO Call python file to get NFC data
    var nfcData = 'SomeStringOfDataFromTheNFCTagWhichWillProbablyBePrettyLong'
    // Get wallet balance from database
    axios.post('https://spirit-machine.herokuapp.com/wallet/' + nfcData)
        .then(jsonData => {
            res.json(jsonData.data);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;