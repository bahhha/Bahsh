$(document).keypress(function(e) {
  if (65 <= e.which && e.which <= 65 + 25 || 97 <= e.which && e.which <= 97 + 25) {
    // alphabet
    addChar(String.fromCharCode(e.which));
  } else if (e.which == 32) {
    // space
    addChar("&nbsp;");
  } else if (e.which == 13) {
    // enter
    $("#console").append("<p class='command'></p>").scrollTop($("#console").get(0).scrollHeight);
  }
});

function addChar(c) {
  var $command = $(".command:last-child");
  $command.html($command.html() + c);
}
