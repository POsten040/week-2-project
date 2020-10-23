const firstanswer = parseInt($("#first").val());

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    if (firstanswer > 0) {
      $("#python").append("Python!");
    event.preventDefault()
    }
  });
});


