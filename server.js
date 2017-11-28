var express = require("express");
var app = express();
 var languages = require("./language-routes.js")
 app.use(express.static(__dirname + "/public"));

app.use("/",languages);

var server = app.listen(8080, function(){
	
	console.log("server is up and running")
});