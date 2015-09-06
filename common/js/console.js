$(function() {
  $("#scroll-area").click(function(e) {
    e.preventDefault();
    $("#input-dummy").focus();
  });
  $("#input-dummy").on("input", function(e) {
    $(".command:last-of-type").text($("#input-dummy").val().replace(/ +/g, " "));
  });
  $("#input-dummy").keypress(function(e) {
    if (e.which == 13) {
      // enter key
      $("#console").append("<p class='command'></p>");
      $("#input-dummy").val("");
    }
    $("#scroll-area").scrollTop($("#scroll-area").get(0).scrollHeight);
  });
  $("#input-dummy").focus();
});
