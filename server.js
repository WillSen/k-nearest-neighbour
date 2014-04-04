var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'))

server.listen(3000);