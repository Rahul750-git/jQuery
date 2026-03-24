$(document).ready(function () {
  $("#btn1").click(function () {
    var a = $("input[name='gender']:checked").val();
    alert(a);
  });
  $("#btn2").click(function () {
    var item = $("#mylist").val();
    if (item == "-1") {
      alert("Please select a item");
    } else {
      alert("your item is : " + item);
    }
  });
});
