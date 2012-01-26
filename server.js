// requires
var setup = require('./lib/setup.js');

// routes
require('./lib/routes.js')(setup);

// server
setup.app.listen(setup.port);