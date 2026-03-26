$(document).ready(function () {
  $("#btn1").click(function (e) {
    e.preventDefault();
    var option = $('input[type="radio"]:checked');
    if (option.length > 0) {
      $("#h1").html(option.val() + " is Checked..");
    } else {
      $("#h1").html("No Radio Button Checked..");
    }
  });
 
});
