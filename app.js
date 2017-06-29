(function(){

  //Accolades code



$(document).ready(function(){

  $(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  //navbar turns gray
  if(wScroll > $('.credentials').offset().top-($(window).height()/1.2)) {
    $('.credentials h4').each(function(i){
      setTimeout(function() {
      $('.credentials h4').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });
  }

  if(wScroll > $('.writing').offset().top-($(window).height()/1.2)) {
    $('.writing h4').each(function(i){
      setTimeout(function() {
      $('.writing h4').eq(i).addClass('is-showing');
    }, 150 * (i+1));
  });
  }
});
//show development copy
  $('.dev .text-block').on('click', function(){
    $('.copy-box').show();
    $('.opening-copy').hide();
    $('.line-copy').hide();
    $('.copy-copy').hide();
    $('.proof-copy').hide();
    $('.coach-copy').hide();
    $('.dev-copy').fadeIn();
  });

//show line copy
$('.line .text-block').on('click', function(){
  $('.copy-box').show();
  $('.opening-copy').hide();
  $('.dev-copy').hide();
  $('.copy-copy').hide();
  $('.proof-copy').hide();
  $('.coach-copy').hide();
  $('.line-copy').fadeIn();
});
//show copy copy
$('.copy .text-block').on('click', function(){
  $('.copy-box').show();
  $('.opening-copy').hide();
  $('.line-copy').hide();
  $('.dev-copy').hide();
  $('.proof-copy').hide();
  $('.coach-copy').hide();
  $('.copy-copy').fadeIn();
});
//show proof copy
$('.proof .text-block').on('click', function(){
  $('.copy-box').show();
  $('.opening-copy').hide();
  $('.line-copy').hide();
  $('.copy-copy').hide();
  $('.dev-copy').hide();
  $('.coach-copy').hide();
  $('.proof-copy').fadeIn();
});
//show coach copy
$('.coach .text-block').on('click', function(){
  $('.copy-box').show();
  $('.opening-copy').hide();
  $('.line-copy').hide();
  $('.copy-copy').hide();
  $('.proof-copy').hide();
  $('.dev-copy').hide();
  $('.coach-copy').fadeIn();
});

function doFade(){
    $(".quote-one").fadeIn(4000,function() {
        $(".quote-one").delay(6000).fadeOut(4000);
        setTimeout(fadeTwo,10000);
    });
}

function fadeTwo(){
    $(".quote-two").fadeIn(4000,function() {
        $(".quote-two").delay(6000).fadeOut(4000);
        setTimeout(fadeThree,10000);
    });
}

function fadeThree(){
    $(".quote-three").fadeIn(4000,function() {
        $(".quote-three").delay(6000).fadeOut(4000);
        setTimeout(fadeFour,10000);
    });
}

function fadeFour(){
    $(".quote-four").fadeIn(4000,function() {
        $(".quote-four").delay(6000).fadeOut(4000);
        setTimeout(fadeFive,10000);
    });
}

function fadeFive(){
    $(".quote-five").fadeIn(4000,function() {
        $(".quote-five").delay(6000).fadeOut(4000);
        setTimeout(fadeSix,10000);
    });
}

function fadeSix(){
    $(".quote-six").fadeIn(4000,function() {
        $(".quote-six").delay(6000).fadeOut(4000);
        setTimeout(fadeSeven,10000);
    });
}

function fadeSeven(){
    $(".quote-seven").fadeIn(4000,function() {
        $(".quote-seven").delay(6000).fadeOut(4000);
        setTimeout(fadeEight,10000);
    });
}

function fadeEight(){
    $(".quote-eight").fadeIn(4000,function() {
        $(".quote-eight").delay(6000).fadeOut(4000);
        setTimeout(fadeNine,10000);
    });
}

function fadeNine(){
    $(".quote-nine").fadeIn(4000,function() {
        $(".quote-nine").delay(6000).fadeOut(4000);
        setTimeout(fadeTen,10000);
    });
}

function fadeTen(){
    $(".quote-ten").fadeIn(4000,function() {
        $(".quote-ten").delay(6000).fadeOut(4000);
        setTimeout(fadeEleven,10000);
    });
}

function fadeEleven(){
    $(".quote-eleven").fadeIn(4000,function() {
        $(".quote-eleven").delay(6000).fadeOut(4000);
        setTimeout(fadeTwelve,10000);
    });
}

function fadeTwelve(){
    $(".quote-twelve").fadeIn(4000,function() {
        $(".quote-twelve").delay(6000).fadeOut(4000);
        setTimeout(fadeThirteen,10000);
    });
}

function fadeThirteen(){
    $(".quote-thirteen").fadeIn(4000,function() {
        $(".quote-thirteen").delay(6000).fadeOut(4000);
        setTimeout(doFade,10000);
    });
}

doFade();

  //$('.copy-box .fa').on('click', function(){
    //$('.copy-box').hide();
  //});

});
})();
