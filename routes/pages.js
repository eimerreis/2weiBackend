var express = require("express");
var router = express.Router();

var pages = require("../controllers/PagesController.js");

router.get("/", pages.getAll);

router.get("/:id", pages.getSingle);

module.exports = router;