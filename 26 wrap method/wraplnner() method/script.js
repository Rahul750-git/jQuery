$(document).ready(function () {
    $('#btn1').click(function () { 
        $("p:lt(3)").wrapInner("<b></b>");
        
    });
     $('#btn2').click(function () { 
        $("p:lt(3)> b").contents().unwrap();
        
    });
});