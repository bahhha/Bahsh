$(function() {
  $("#scroll-area").click(function(e) {
    e.preventDefault();
    $("#input-dummy").focus();
  });
  $("#input-dummy").on("input", function(e) {
    var val = $("#input-dummy").val();
    val = $(".command:last-of-type").html(val).text();
    $(".command:last-of-type").text(val);
  });
  $("#input-dummy").keypress(function(e) {
    if (e.which == 13) {
      // enter key
      $("#input-dummy").val("");
      $("#console").append("<p class='command'></p>");
      $("#scroll-area").scrollTop($("#console").height);
    }
  });
  $("#input-dummy").focus();
});
