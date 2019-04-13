var express = require('express');
var router = express.Router();
var axios = require('axios');

// Send NFC data to remote server
router.get('/:machine', function (req, res, next) {
    var machine = req.params.machine;

    // Get wallet balance from database
    axios.get('https://spirit-machine.herokuapp.com/cocktails/2') //+ machine)
        .then(jsonData => {
            res.json(jsonData.data);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;
