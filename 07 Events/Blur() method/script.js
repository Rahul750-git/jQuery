$(document).ready(function () {
  $("#text").focus(function () {
    $("#text").css("background-color", "yellow");
  });
  $("#text").blur(function () {
    $("#text").css("background-color", "white");
  });
});
