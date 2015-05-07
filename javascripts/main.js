$(document).ready(function () { 
   $('img').click(function () {
          $(this).effect("bounce", { times:5 }, 1000);
    });
    $(document).keydown(function(key) {
switch(parseInt(key.which,10)) {
// Left arrow key pressed
case 37:
$('guy').animate({left: "-=10px"}, 'fast');
break;
// Up Arrow Pressed
case 38:
$('guy').animate({up: "-=10px"}, 'fast');
// Put our code here
break;
// Right Arrow Pressed
case 39:
$('guy').animate({right: "+=10px"}, 'fast');
// Put our code here
break;
// Down Arrow Pressed
case 40:
// Put our code here
$('guy').animate({down: "+=10px"}, 'fast');
break;
}
});
});

