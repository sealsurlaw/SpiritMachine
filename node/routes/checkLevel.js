let express = require('express');
let router = express.Router();
let axios = require('axios');
let shell = require('shell-exec');
let hex64 = require('hex64');

// Pour Alcohol
router.get('/:token/:machine', function (req, res, next) {
    const token = req.params.token;
    const machine = req.params.number;

    // Run python script to pour alcohol
    shell(`python ~/Programming/SpiritMachine/python/checkLevel.py`)
        .then(out => {
            const outArr = out.split(',');
            containers = [];
            outArr.forEach((container, i) => {
                if (container === '1')
                    containers.push(i);
            });
            containers.forEach(container => {
                axios.post('http://www.spirit-machine.com/api/notify/empty', {
                    machine: machine,
                    token: token,
                    container: container,
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                        res.send(err);
                    })
            })
            console.log(out);
            res.send(out);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });

});


module.exports = router;
