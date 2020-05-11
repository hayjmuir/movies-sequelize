var express = require("express");
var router = express.Router();

// Import the model (movie.js) to use its database functions.
var movie= require("../models/movie.js");

// Create all our routes and set up logic within those routes where required.
// Index Page (displays all movies)
router.get('/', function (req, res) {
  movie.selectAll(function(data) {
      var hbsObject = { movies: data };

      console.log(hbsObject);
      res.render('index', hbsObject);
  });
});

//add a movie
router.post("/", function(req, res) {
  movie.insertOne(["movie_name", "watched"], [req.body.movie_name, req.body.watched], function() {
    res.redirect("/");
  });
});

//watch a movie
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  movie.updateOne({watched : req.body.watched}, condition, function() {
    res.redirect("/");
  });
});



//Export routes 
module.exports = router;




