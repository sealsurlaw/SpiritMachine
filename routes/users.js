var express = require('express');
var router = express.Router();
var shell = require('shell-exec');

router.get('/', function (req, res, next) {

  shell('python python/script.py')
    .then(out => {
      console.log(out.stdout);
    })
    .catch(err => {
      console.log(err);
    });

  /* GET users listing. */

  res.send('respond with a resource');
});

module.exports = router;
