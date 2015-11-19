var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();
server.set('port', process.env.PORT || 3000);
// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());


// Add custom routes
server.get('/getApiKey', function (req, res) {
  var key = require('crypto').randomBytes(4).toString('hex');

  // Create the json file with the key name
  var jsonfile = require('jsonfile'),
      stubs = jsonfile.readFileSync('data/data.json');

  jsonfile.writeFile('data/'+key+'.json', stubs, function(err) {
    console.log("created file " + key);
  });

 // Send the key back as the response
 res.json({ apiKey: key });

});

// Returns an Express router
var router = jsonServer.router('data/data.json');
server.use(router);

server.listen(server.get('port'));