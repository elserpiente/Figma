
$('.square')
    .on('mouseenter', function(){
        var div = $(this);
        $('body').append('<div class="big-square" onmouseout="rmBigSquare()"></div>');
        $('.big-square').css('position','fixed')
        $('.big-square').css('top','5%')
        $('.big-square').css('left','30%')
        $('.big-square').css('width','40%')
        $('.big-square').css('height','90%')
        $('.big-square').css('background-color','#98B6B0')
        $('.big-square').css('border-radius','25px')

        var img = $(this).children('div');
        $('.big-square').append('<div class="image" id="carre1"></div>');
        $('.big-square .image').css('margin','3% 4% 4% 4%')
        $('.big-square .image').css('width','92%')
        $('.big-square .image').css('padding-top','56%')
        $('.big-square .image').css('background-color','#004D40')
        $('.big-square .image').css('border-radius','25px')
        $('.big-square .image').css('background-size','cover')
        $('.big-square .image').css('background-position','center')
        $('.big-square .image').css('background-image',img.css('background-image'))

        var titre = $(this).children('h2');
        $('.big-square').append('<h2>'+titre.text()+'</h2>');
        $('.big-square h2').css('margin-left','4%')

        var texte = $(this).children('.hidden');
        $('.big-square').append('<p>'+texte.text()+'</p>');
        $('.big-square p').css('margin-left','4%')
    })



$('.square')
    .on('mouseleave', function(){
      if ($('.big-square').is(':hover') === false){

        $('.big-square').remove();
      }
    })

function rmBigSquare() {
    $('.big-square').remove();
  }
