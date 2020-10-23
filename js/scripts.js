const choice0 = parseInt($("option#0").val());
const choice1 = parseInt($("option#1").val());
const choice2 = parseInt($("option#2").val());
const choice3 = parseInt($("option#3").val());
const choice4 = parseInt($("option#4").val());
const choice5 = parseInt($("option#5").val());
const choice6 = parseInt($("option#6").val());
const choice7 = parseInt($("option#7").val());
const choice8 = parseInt($("option#8").val());
const choice9 = parseInt($("option#9").val());
const choice10 = parseInt($("option#10").val());
const choice11 = parseInt($("option#11").val());
const choice12 = parseInt($("option#12").val());
const choice13 = parseInt($("option#13").val());
const choice14 = parseInt($("option#14").val());
const choice15 = parseInt($("option#15").val());

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const result = (choice1 + choice2 + choice3 + choice4 + choice5 + choice6 + choice7 + choice8 + choice9 + choice10 + choice11 + choice12 + choice13 + choice14 + choice15)
    
    $("#python").append("Python!");
  });
});