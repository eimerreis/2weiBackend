var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var server = require("http").createServer(app);

//Frontend der Applikation
app.use(express.static(__dirname + "/public"));

server.listen(process.env.PORT || 3000);