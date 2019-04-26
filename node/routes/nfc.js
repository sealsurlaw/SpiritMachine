let express = require('express');
let router = express.Router();
let axios = require('axios');
let shell = require('shell-exec');
let hex64 = require('hex64');

/* GET nfc data. */
router.get('/card', function (req, res, next) {

    // TODO Call python file to get NFC data
    shell('sudo python /home/pi/Programming/MFRC522-python/Read.py')
        //shell('echo NFC has been disabled')
        .then(out => {

            let nfcData = out.stdout;
            nfcData = hex64.decode(nfcData);

            res.json({ data: nfcData });
        })
        .catch(err => {
            console.log(err);
        });
    // res.json({data: '4VhvfYj4vF09B34iPrThnzYWc6TORZ2ZQ-heqNWi4heQbw=='});

});

// Send NFC data to remote server
router.get('/:nfcData', function (req, res, next) {
    let nfcData = req.params.nfcData;

    // Get wallet balance from database
    axios.get(`http://www.spirit-machine.com/api/wallet/${nfcData}`)
        .then(jsonData => {
            res.json(jsonData.data);
            //res.json({money: out.stdout})
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/:token/:newBalance', (req, res) => {
    let token = req.params.token;
    let newBalance = req.params.newBalance;

    // Update wallet balance
    axios.post(`http://www.spirit-machine.com/api/wallet/${token}/${newBalance}`)
        .then(jsonData => {
            console.log(jsonData.data)
            res.send(jsonData.data);
            //res.json({money: out.stdout})
        })
        .catch(err => {
            console.log(err);
        });
})

module.exports = router;
