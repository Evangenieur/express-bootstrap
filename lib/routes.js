// requires
var helpers = require('./helpers');

// exports
module.exports = function(app) {  
  app.get('/', home);
};

// routes
var home = function(req, res, next) {
  res.render('home.jade');
}