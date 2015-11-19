var jsonServer = require('json-server')

// Returns an Express server
var server = jsonServer.create();
server.set('port', process.env.PORT || 3000);
// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
var router = jsonServer.router('data/data.json');
server.use(router);

server.listen(server.get('port'));