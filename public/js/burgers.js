$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var burger_name = $(this).data("burger_name");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + burger_name, {
        type: "PUT",
      }).then(
        function() {
          console.log("You ate the burger!");
          location.reload()
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let burger_name = $("#ca").val().trim();
     
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: {"newBurger":burger_name}
      }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});