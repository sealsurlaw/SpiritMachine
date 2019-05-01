var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var nfcRouter = require('./routes/nfc');
var machineRouter = require('./routes/machine');
var pourRouter = require('./routes/pour');
var checkRouter = require('./routes/checkLevel');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/wallet', nfcRouter);
app.use('/api/machine', machineRouter);
app.use('/pour', pourRouter);
app.use('/check', checkRouter);

module.exports = app;
