var app = require('./config/express')();

require('./config/database.js')('mongodb://localhost/concessionaria');



module.exports = app;

var schedule = require('node-schedule');

