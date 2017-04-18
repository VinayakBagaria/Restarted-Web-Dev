$(document).ready(function() {
  // the same as yours.
  function rotateOnMouse(e, pw) {
      var offset = pw.offset();
      var center_x = (offset.left) + ($(pw).width() / 2);
      var center_y = (offset.top) + ($(pw).height() / 2);
      var mouse_x = e.pageX;
      var mouse_y = e.pageY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree = (radians * (180 / Math.PI) * -1) + 100;
      var translate=0,threshold=30;

      if(degree>=threshold)
        degree=threshold;
      else if (degree<=-threshold)
        degree=-threshold;

      // slight displacement from initial position after rotation
      translate=degree*3;
      $(pw).css('transform','rotate(' + degree + 'deg) translate('+translate+'px,'+Math.abs(translate)+'px)');
      console.log(degree);
      if(degree>0){
        $('.heart').css({
          'display':'block',
        });
        $('.poop').css({
          'display':'none',
        });
      }
      else if (degree<0) {
        $('.heart').css({
          'display':'none',
        });
        $('.poop').css({
          'display':'block',
        });
      }
      // degree = 0
      else{
        $('.heart').css({
          'display':'none',
        });
        $('.poop').css({
          'display':'none',
        });
      }
  }

  $('.monday').mousedown(function(e) {
    e.preventDefault(); // prevents the dragging of the image.
    $(document).bind('mousemove.rotateImg', function(e2) {
      rotateOnMouse(e2, $('.monday'));
    });
  });

  $(document).mouseup(function(e) {
    $(document).unbind('mousemove.rotateImg');
    var degree=0;
    var pw=$('.monday');
    $(pw).css('-moz-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-webkit-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-o-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('-ms-transform', 'rotate(' + degree + 'deg)');
    $(pw).css('transition-origin','100px 100px');
    $('.heart,.poop').css({'display':'none'});
  });
});
