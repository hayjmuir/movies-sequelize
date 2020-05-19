$(function () {
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newMovie = {
        movie_name: $("#newmovie").val().trim(),
        watched: 0
      };
  
  
      // Send the POST request.
      $.ajax("/api/movies", {
        type: "POST",
        data: newMovie
      }).then(
        function () {
         
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".watchMovie").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      var watchedStatus = {
        watched: 1
      };
  
      // Send the PUT request.
      $.ajax("api/movies/" + id, {
        type: "PUT",
        data: watchedStatus
      }).then(
        function () {
          
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });