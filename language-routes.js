var express = require("express");
var routes = express.Router();

routes.get("/order",function(req, res){
 
 res.send("Get is successful to both your terminal
and your browser console");

});

routes.post("/order1", function(req, res) {
res.send("post request is working ");
});

routes.put("/order2", function(req, res) {
res.send("put request is working ");
});

routes.delete("/order3", function(req, res) {
res.send("Delete request works fine");
});

module.exports = routes;
