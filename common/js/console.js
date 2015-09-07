function resetConsoleCaretPosition() {
  var $input = $("#input-line");
  var $checker = $("#caret-checker");
  var start = $input.get(0).selectionStart;
  var val = $input.val();
  var span = document.createElement('span');
  span.innerHTML = "_";
  $checker.text(val.substring(0, start));
  $checker.append(span);
  var pos = $(span).position();
  var style = [
    ".command:last-of-type::after{",
    "top:" + pos.top + "px;",
    "left:" + pos.left + "px;",
    "}"
  ];
  $("#caret-checker-style").text(style.join(""));
}
$(function() {
  $("#scroll-area").click(function(e) {
    e.preventDefault();
    $("#input-line").focus();
  });
  $("#input-line").on("input", function(e) {
    var val = $(e.target).val();
    $("p:last-of-type").text(val);
    $(e.target).height($("p:last-of-type").get(0).offsetHeight);
  });
  $("#input-line").keyup(function(e) {
    $("#scroll-area").scrollTop($("#scroll-area").get(0).scrollHeight);
    resetConsoleCaretPosition();
  });
  $("#input-line").keydown(function(e) {
    if (e.which == 13) {
      // enter key
      var val = $("#input-line").val();
      $("p:last-of-type").text(val);
      var words = val.split(" ");
      var command = words.shift();
      console.log("'" + command + "'");
      if (!command) {} else if (command == "echo") {
        $("#console").append("<p></p>");
        $("p:last-of-type").text(words.join(" "));
      } else {
        $("#console").append("<p></p>");
        $("p:last-of-type").text("command '" + command + "' not found");
      }
      $("#input-line").val("");
      $("#console").append("<p class='command'></p>");
      $("#scroll-area").scrollTop($("#scroll-area").get(0).scrollHeight);
      resetConsoleCaretPosition();
      return false;
    }
  });
  $("#input-line").focus();
  resetConsoleCaretPosition();
});
