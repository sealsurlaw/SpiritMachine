let express = require('express');
let router = express.Router();
let axios = require('axios');
let shell = require('shell-exec');
let hex64 = require('hex64');

// Pour Alcohol
router.get('/:token/:machine', function (req, res, next) {
    const token = req.params.token;
    const machine = req.params.machine;

    // Run python script to pour alcohol
    shell(`python ~/Programming/SpiritMachine/python/checkLevel.py`)
        .then(out => {
            const outArr = out.stdout.substring(0,7).split(',');
            console.log(outArr);
            let containers = [];
            outArr.forEach((container, i) => {
                console.log('container ' + i + ': ' + container);
                if (container === '1') {
                    containers.push(i);
                }
            });
            console.log('Containers: ' + containers);
            console.log('Machine: ' + machine);
            console.log('Token: ' + token);
            containers.forEach(container => {
                console.log('\tContainer: ' + container);
                axios.post('http://www.spirit-machine.com/api/notify/empty', {
                    machine: machine,
                    token: token,
                    container: container,
                })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err.data);
                        // res.send(err.data);
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
