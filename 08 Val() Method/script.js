$(document).ready(function () {
  $("#txt2").css("margin-top", "10px");
  $("#Addbtn").css("margin-top", "10px");
  $("#Addbtn").click(function () {
    var n1 = $("#txt1").val();
    var n2 = $("#txt2").val();
    if (n1 === "" || n2 === "") {
      alert("Please fill both Fields ");
    } else {
      var add = parseInt(n1) + parseInt(n2);
      //   alert("Addition result is: " + add);
      $("#h1").text("Addition result is : " + add);
    }
  });
  $("#btn").css("margin-top", "10px");
  $("#btn").click(function () {
    var item = $("#sel").val();
    if (item == "-1") {
      alert("Please select an item ");
    } else {
      $("#h2").text("you have selected: " + item);
    }
  });
});
