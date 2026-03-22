$(document).ready(function () {
  $("#toggle").click(function () {
    $(".h1").toggle(3000, function () {
      alert("hide&show");
    });
    $(".h1").css("color", "pink");
  });
});
