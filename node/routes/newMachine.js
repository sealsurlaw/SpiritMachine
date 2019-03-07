var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function (req, res, next) {
    const query = `http://spirit-machine.herokuapp.com/newMachine?`
        + `user=` + req.query.user
        + `&machine=` + req.query.machine
        + `&alcohols=` + req.query.alcohols
        + `&mixers=` + req.query.mixers;

    console.log(query);

    axios.get(query)
        .then(mach => {
            console.log(mach);
            res.json(mach);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
});

module.exports = router;
