$(document).ready(function () {
  $("#btn1").click(function (e) {
    e.preventDefault();
    var option = $('input[type="checkbox"]:checked');
    var string = option.length + "checkbox Checked <br>";
    if (option.length > 0) {
        option.each(function(){
            string += $(this).val() + "<br> ";
             $("#h1").html(string);
        });
     
    } else {
      $("#h1").html("checkbox  is not  checked..");
    }
  });
});
