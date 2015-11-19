var jsonServer = require('json-server'),
    fs = require('fs');

// Returns an Express server
var server = jsonServer.create();
server.set('port', process.env.PORT || 3000);
// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

fs.readdir('./data/', function(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    server.use('/'+file.replace('.json', ''), jsonServer.router('data/'+file));
  })
});

// Add custom routes
server.get('/getApiKey', function (req, res) {
  var key = require('crypto').randomBytes(4).toString('hex');
  // Create the json file with the key name
  var jsonfile = require('jsonfile'),
      stubs = jsonfile.readFileSync('data/data.json');
  jsonfile.writeFile('data/'+key+'.json', stubs, function(err) {
    server.use('/'+key, jsonServer.router('data/'+key+'.json'));
  });
 // Send the key back as the response
 res.json({ apiKey: key });
});

server.listen(server.get('port'));