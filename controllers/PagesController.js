require("../models/Page");
var mongoose = require("mongoose");
var Page = mongoose.Model("Page");

exports.getAll = function(req, res){
    Page.find().exec(function(err, pages){
       res.jsonp(players);
    });
};

exports.getSingle = function(req, res){
  Page.load(req.params.id, function(err, page){
     res.jsonp(page);
  });
};