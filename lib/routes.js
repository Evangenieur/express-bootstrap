module.exports = function(helpers, config, app, models) {
  
  app.get('/', function(req, res){
    res.render('index.jade');
  });
  
};