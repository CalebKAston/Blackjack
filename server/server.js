var express = require('express');
var app = express();

app.use(express.static('../client'))

var port = process.env.PORT || 8080;
// http://localhost:8080/

app.listen(port);
console.log('Setting sail for ' + port);