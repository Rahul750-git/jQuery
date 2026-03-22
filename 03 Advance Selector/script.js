$(document).ready(function () {
  alert("Welcome to jQuery");
  $("#btn1").click(function () {
    $("*").css("color", "red");
  });
  $("#btn2").click(function () {
    $("#div2,#list").ready(function () {
      $("ul li").css("font-size", "20px");
    });
  });
  $("#btn3").click(function () {
    $(".p1,.p2").css("background-color", "brown");
  });
  $("#btn4").click(function () {
    $("span:first").css("background-color", "green");
    $("span:last").css("background-color", "blue");
  });
  $("#btn5").click(function () {
    $("#div1,.ul1").ready(function () {
      $(".li:even").css("background-color", "green");
    });
  });
  $("#btn6").click(function () {
    $("#div2,.ul2").ready(function () {
      $(".li1:odd").css("background-color", "brown");
    });
  });
  $("#btn7").click(function () {
    $("#div3,.ul3").ready(function () {
      $(".li2:first-child").css("background-color", "brown");
    });
  });
  $("#btn8").click(function () {
    $("#div4,.ul4").ready(function () {
      $(".li3:eq(2)").css("background-color", "orange");
    });
  });
  $("#btn9").click(function () {
    $("#div5,.ul5").ready(function () {
      $(".li4:lt(3)").css("background-color", "blue");
    });
  });
  $("#btn10").click(function () {
    $("#div6,.ul6").ready(function () {
      $(".li5:gt(3)").css("background-color", "pink");
    });
  });
});
