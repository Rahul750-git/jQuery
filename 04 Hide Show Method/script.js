$(document).ready(function () {
  alert("Welcome To jQuery");
  // slow property
  $("#hide").click(function () {
    $(".h1").hide("slow", function () {
      alert("Hide Done ");
    }); //speed property:-- slow ,fast ,millisecond
  });
  $("#show").click(function () {
    $(".h1").show("slow", function () {
      alert("show Done");
    });
    $(".h1").css("color", "green");
  });

  // fast property
  $("#hide1").click(function () {
    $(".h2").hide("fast", function () {
      alert("Hide complete...");
    }); //speed property:-- slow ,fast ,millisecond
  });
  $("#show1").click(function () {
    $(".h2").show("fast", function () {
      alert("Show Complete...");
    });
    $(".h2").css("color", "green");
  });
  //millisecond property
  $("#hide3").click(function () {
    $(".h3").hide(3000, function () {
      alert("hide successfully...");
    }); //speed property:-- slow ,fast ,millisecond
  });
  $("#show3").click(function () {
    $(".h3").show(3000, function () {
      alert("Show Successfully...");
    });
    $(".h3").css("color", "green");
  });
});
