// set up ========================
var ENV = process.env.NODE_ENV || 'development';

var express  = require('express'); // fac get la express
var app      = express();           //instantiez express            
var config = require('./config'); // fac get la fisierul de config
var http = require('http');  //fac get la http
var server;


/**
 * Set express (app) variables
 */
app.set('config', config);
app.set('root', __dirname); //__dirname = calea unde esti
app.set('env', ENV); //development


require('./config/mongoose').init(app); // ORM pt mongoDb
require('./config/models').init(app); //modele (in loc de tabelele din mysql)
require('./config/passport').init(app); //libraria pt autentificare
require('./config/express').init(app); //pluginu pt nodeJs
require('./config/routes').init(app); //rutele aplicatie
app.use(express.static(__dirname + '/public'));    



app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
/**
 * Start the app if not loaded by another module
 */
if (!module.parent) {
  server = http.createServer(app);

  server.listen(config.port || 3000, config.hostname || 'localhost', function() {
    var addr = server.address();
    console.log(
      '%s is running, listening on %s:%s, environment: %s',
      config.app.name,
      addr.address,
      addr.port,
      ENV.toLowerCase()
    );
  });
}
