

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstanswer = parseInt($("#first").val());
    const secondanswer = parseInt($("#second").val());
    const thirdanswer = parseInt($("#third").val());
    const fourthanswer = parseInt($("#fourth").val());
    const fifthanswer = parseInt($("#fifth").val());
    const sum = firstanswer + secondanswer + thirdanswer + fourthanswer + fifthanswer
    if (sum <= 5) {
      $("#python").append("Python!");
      event.preventDefault();
    }
  });
});


