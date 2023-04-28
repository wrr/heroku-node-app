const express = require('express');
const wwwhisper = require('connect-wwwhisper');
const app = express();

app.use(wwwhisper());

app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><b>Hello</b> from Connect!</body></html>');
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
