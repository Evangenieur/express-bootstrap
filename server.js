// requires
var config = require('./lib/config');
var stylus = require('stylus');
var express = require('express');

// instances
var port = process.env.PORT || config.express.port;
var app = express.createServer();

// express
app.configure(function(){
  var public = __dirname + '/public';
  var views = __dirname + '/views';
  
  app.use(stylus.middleware({ src: public + '/css' }));
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "keyboardmouse" }));
  app.set("view options", { layout: false });
  app.set('views', views);
  app.use('/', express.static(public));
  app.use(app.router);
});

// routes
require("./lib/routes")(app);

// listen
app.listen(port);
