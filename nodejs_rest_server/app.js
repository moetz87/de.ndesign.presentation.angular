var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var todoService = require("./app/todoService.js");
var routes = require("./app/routes.js")(app, todoService);

var server = app.listen(3000, function () {
	console.log("Listening on port %s...", server.address().port);
});