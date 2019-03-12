var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nfcRouter = require('./routes/nfc');
var machineRouter = require('./routes/machine');
var motorRouter = require('./routes/pump');
var newMachine = require('./routes/newMachine');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/nfc', nfcRouter);
app.use('/api/machine', machineRouter);
app.use('/api/motor', motorRouter);
app.use('/newMachine', newMachine);

module.exports = app;
