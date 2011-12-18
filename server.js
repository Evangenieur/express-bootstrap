var mongoose = require('mongoose');
var express = require('express');
var stylus = require('stylus');
var app = express.createServer();
var models = {};
var config = require('./lib/config.js')(express, app, mongoose, models, stylus);
var helpers = require('./lib/helpers.js');
var routes = require('./lib/routes.js')(helpers, config, app, models);

app.listen(process.env.PORT || 3000);