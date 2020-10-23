$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()
    const value1 = parseInt($("1").val());
    alert(value1)