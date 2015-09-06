$(function() {
  $("#scroll-area").click(function(e) {
    e.preventDefault();
    $("#input-dummy").focus();
  });
  $("#input-dummy").on("input", function(e) {
    $(".command:last-of-type").text($("#input-dummy").val().replace(/^ +/, "").replace(/ +/g, " "));
  });
  $("#input-dummy").keypress(function(e) {
    if (e.which == 13) {
      // enter key
      var words = $(".command:last-of-type").text().split(" ");
      var command = words.shift();
      $("#console").append("<p></p>");
      if (command == "echo") {
        $("p:last-child").text(words.join(" "));
      } else {
        $("p:last-child").text("command " + command + " not found");
      }
      $("#console").append("<p class='command'></p>");
      $("#input-dummy").val("");
    }
    $("#scroll-area").scrollTop($("#scroll-area").get(0).scrollHeight);
  });
  $("#input-dummy").focus();
});
