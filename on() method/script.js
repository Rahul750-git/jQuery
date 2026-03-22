$(document).ready(function () {
    $('.h1').on({
        click:function () { 
            $('h1').css("background-color","red");  
        },
          mouseenter:function () { 
            $('h1').css("color","green");  
        },
          mouseleave:function () { 
            $('h1').css("color","pink");  
        }
    })
});