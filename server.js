
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path =require("path");
var fs = require('fs');

var PORT = process.env.PORT || 3000;



//extended: true means it can be any key value pair?
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());



app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});
app.use("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});
app.use( '/api/friends', require('./app/routing/apiRoutes'));
app.use('/', require('./app/routing/htmlRoutes'));
app.get('/', function(req, res) {
    res.send('Hello route');
});

app.use(express.static('app'));

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


