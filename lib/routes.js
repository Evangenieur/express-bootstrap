// requires
var helpers = require('./helpers');

// exports
module.exports = function(setup) {
  var app = setup.app;
  var models = setup.models;
  
  app.get('/', home);
};

// routes
var home = function(req, res, next) {
  res.render('home.jade');
}