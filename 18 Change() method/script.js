$(document).ready(function () {
  $("#mylist").change(function () {
    var item = $("#mylist").val();
    if (item == "-1") {
      alert("please select the fruit");
    } else {
      //   alert("select your fruit is : " + item);
      $("#myh1").html("select your fruit is : " + item);
    }
  });
  $("#name").change(function () {
    var txt = $("#name").val();
    $("#myh2").text(txt);
  });
  $("#mytxt").change(function () {
    var txt = $("#mytxt").val();
    $("#myp").text(txt);
  });
});
