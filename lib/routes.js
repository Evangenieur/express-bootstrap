var helpers = require('./helpers')

module.exports = function(configure) {
  
  var app = configure.app,
      models = configure.models;
  
  app.get('/', function(req, res){
    res.render('index.jade');
  });
  
};