helpers = require './helpers'

routes = (app, config) ->
  app.get '/', (req, res, next) ->

    res.render 'home.jade',
      company: config.company
      project: config.project
      page:
        name: "My Home"


module.exports = routes
