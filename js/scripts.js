

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstanswer = parseInt($("#first").val());
    const secondanswer = parseInt($("#second").val());
    const thirdanswer = parseInt($("#third").val());
    const fourthanswer = parseInt($("#fourth").val());
    const fifthanswer = parseInt($("#fifth").val());
    const sum = firstanswer + secondanswer + thirdanswer + fourthanswer + fifthanswer
    if (sum <= 5) {
      $("h1#python").toggle(function(){
        $("h1#javascript").hide(function(){
          $("h1#C").hide();
        });
      });
    } else if (sum >= 6 && sum <= 10) {
      $("h1#javascript").toggle(function(){
        $("h1#python").hide(function(){
          $("h1#C").hide();
        });
      });
    } else if (sum >10) {
      $("h1#C").toggle(function(){
        $("h1#javascript").hide(function(){
          $("h1#python").hide();
        });
      });
    }
  $("#btn2").click(function() {
    $("h1#C").hide(function(){
      $("h1#javascript").hide(function(){
        $("h1#python").hide();
      });
    });
  });
  event.preventDefault();
  });
});
