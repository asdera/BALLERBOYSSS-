$(document).ready(function () { 
   $('img').click(function () {
          $(this).effect("bounce", { times:5 }, 1000);
    });
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            case 65:
                $('#guy').animate({left: "-=50px"}, 'fast');
                break;
            case 83:
                $('#guy').effect("bounce", { times:1 }, 2000);
                break;
            case 68:
                $('#guy').animate({left: "+=10px"}, 'fast');
                break;
            default:
                break;
        }
    });
});

