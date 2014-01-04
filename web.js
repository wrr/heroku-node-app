var express = require('express');
var wwwhisper = require('connect-wwwhisper');
var logfmt = require('logfmt');
var app = express();

app.use(wwwhisper());
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
