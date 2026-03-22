$(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggle("fast", function () {
      alert("hide&show");
    });
    $(".h1").css("color", "pink");
  });
});