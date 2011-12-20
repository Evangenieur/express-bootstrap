// requires
var config = require('./config'),
    stylus = require('stylus'),
    mongoose = require('mongoose')
    express = require('express');

// instances
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
var Schema = mongoose.Schema;
var entry = new Schema({
  field1: { 
    type: String 
  }, 
  field2: {
    type: String 
  }, 
  date: { 
    type: Date, 
    default: Date.now 
  }
});
var models = {
  entry: mongoose.model('entry', entry)
}

// exports
module.exports = {
  models: models,
  app: app
}

