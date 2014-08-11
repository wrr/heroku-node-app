var express = require('express');
var logfmt = require('logfmt');
var wwwhisper = require('connect-wwwhisper');
var app = express();
app.set('view engine', 'jade');
app.use(logfmt.requestLogger());
//app.use(express.compress());
//app.use(require('compression')());
app.use(wwwhisper());
//app.use(express.compress());

app.set('views', __dirname + '/views');
app.engine('html', require('jade').__express);

app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><b>Hello</b> from Connect!</body></html>');

  /*res.send('Hello World!');
  res.end();*/
});

app.get('/foo', function(req, res) {
  console.log('going to render error');
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.header('Content-Type', 'text/plain');
  //res.statusCode = 400;
  return res.render('error');
  //res.render('index.html');
});

app.get('/bar', function(req, res) {
  res.render('index.html', function(err, html) {
    res.end(html);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
