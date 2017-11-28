var express = require("express");
var routes = express.Router();

routes.get("/",function(req, res){
 
 res.send("this is your basline");

});

routes.post("/order1", function(req, res) {
res.send("JavaScript is pretty neat");
});

routes.put("/order2", function(req, res) {
res.send("But so is NodeJS...");
});

routes.delete("/order3", function(req, res) {
res.send("AngularJS is pretty solid");
});

module.exports = routes;