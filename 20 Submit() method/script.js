$(document).ready(function () {
  $("#myform").submit(function (event) {
    event.preventDefault();
    var name = $("#txt1").val();
    var name1 = $("#txt2").val();
    $(".myh1").text(name + " " + name1);
  });
});
