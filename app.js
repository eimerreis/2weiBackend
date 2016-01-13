var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var server = require("http").createServer(app);

//Frontend der Applikation
app.use(express.static(__dirname + "/public"));
server.listen(process.env.PORT || 3000);

//Connect to MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/h2wei');
var db = mongoose.connection;
db.on('error', function callback(){
    console.log("Verbindung zu MongoDB fehlgeschlagen");
});

db.once('open', function callback(){
    console.log("Verbindung zu MongoDB ERFOLGREICH!");
});

//Enable POST Data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Register Routes
var router = express.Router();
app.use("/api/pages", require("./routes/pages"));

