var express = require("express");
var router = express.Router();

// Import the model (movie.js) to use its database functions.
var db= require("../models");

// Create all our routes and set up logic within those routes where required.
// Index Page (displays all movies)
router.get('/', function (req, res) {
  db.Movie.findAll({}).then(function(data) {
    
    let newData = data.map(elem=> {return {
      id: elem.id,
      movie_name: elem.movie_name,
      watched: elem.watched
    }})

    
    
    
    
    var hbsObject = { movies: newData };

      console.log(hbsObject);
      res.render('index', hbsObject);
  });
});

//add a movie
router.post("/", function(req, res) {
  db.Movie.Create({
    movie_name: req.body.movie_name,
    watched: false
  }).then(
    function () {
      res.redirect("/");
    });
});

//watch a movie
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  db.Movie.Update({watched : req.body.watched},
     {where:{
    id: req.params.id
  }})
    .then(function(){res.redirect("/");
  });
});



//Export routes 
module.exports = router;




