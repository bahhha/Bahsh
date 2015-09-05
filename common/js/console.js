$(document).keypress(function(e) {
  if (65 <= e.which && e.which <= 65 + 25 || 97 <= e.which && e.which <= 97 + 25) {
    // alphabet
    var c = String.fromCharCode(e.which);
    $(".command:last-child").append(c);
  } else if(e.which == 32) {
    // space
    $(".command:last-child").append("&nbsp;");
  } else if(e.which == 13) {
    // enter
    $("#console").append("<p class='command'></p>");
  }
});
