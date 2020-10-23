

$(document).ready(function() {
  $("#formOne").submit(function() {
    const choice1 = $("option#1").val();
    $("#python").append("Python!");
  });
});