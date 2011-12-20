var setup = require('./lib/setup.js'),
    port = process.env.PORT || 3000;

require('./lib/routes.js')(setup);

setup.app.listen(port);