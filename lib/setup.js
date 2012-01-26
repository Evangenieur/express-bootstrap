// requires
var config = require('./config');
var stylus = require('stylus');
var mongoose = require('mongoose');
var express = require('express');
var db = require('./db');

// instances
var port = process.env.PORT || config.express.port;
var app = express.createServer();

// express
app.configure(function(){
  app.use(stylus.middleware({ src: __dirname + '/../' }));
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "keyboardmouse" }));
  app.set('views', __dirname + '/../views');
  app.set("view options", { layout: false });
  app.use('/public', express.static(__dirname + '/../public'));
  app.use(app.router);
});

// mongoose
mongoose.connect(config.mongo.db);

// exports
module.exports = {
  models: db.models,
  app: app,
  port: port
}

