$(() => {
  const sizeMap = {
    'switcher-small': n => n / 1.4,
    'switcher-large': n => n * 1.4,
    'switcher-default': () => defaultSize
  };

  const $speech = $('div.speech');
  const defaultSize = parseFloat($speech.css('fontSize'));
  
  $('#switcher button').click((e) => {
    const num = parseFloat($speech.css('fontSize'));
    $speech.animate({
      fontSize: `${sizeMap[e.target.id](num)}px`
    });
    //$speech.css('fontSize', `${sizeMap[e.target.id](num)}px`);
  });

  /* $('p').eq(1).hide();

  $('a.more').click((e) => {
    e.preventDefault();
    $('p').eq(1).slideDown(5000);
  
    $(e.target).hide();
  }); */

  const $firstPara = $('p').eq(1).hide();

  $('a.more').click((e) => {
    e.preventDefault();
    //$firstPara.slideToggle('slow');

    $firstPara.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
  
    $(e.target).text($(e.target).text() === 'read more' ? 'read less' : 'read more');
  });

  $('div.label').click((e) => {
    const $switcher = $(e.target).parent();
    const paraWidth = $('div.speech p').outerWidth();
    const switcherWidth = $switcher.outerWidth();
    
    /* $switcher.css('position', 'relative')
      .fadeTo('fast', 0.5)
      .animate(
        { left: paraWidth - switcherWidth },
        { duration: 'slow', queue: false }
      )
      .fadeTo('slow', 1.0)
      .slideUp('slow')
      .css('backgroundColor', '#f00')
      .slideDown('slow'); */

    $switcher.css('position', 'relative')
      .fadeTo('fast', 0.5)
      .animate(
        { left: paraWidth - switcherWidth },
        { duration: 'slow', queue: false }
      )
      .fadeTo('slow', 1.0)
      .slideUp('slow')
      .queue((next) => {
      $switcher.css('backgroundColor', '#f00');
      next();
      })
      .slideDown('slow');
  });

    /* $('p').eq(2).css('border', '1px solid #333');
    
    $('p').eq(3).css('backgroundColor', '#ccc').hide(); */

  /* $('p').eq(2).css('border', '1px solid #333').click((e) => {
    $(e.target).next().slideDown('slow', () => {
      $(e.target).slideUp('slow');
    });
  });

  $('p').eq(3).css('backgroundColor', '#ccc').hide(); */

  // 1
  $("body").hide().fadeIn(3000);

  // 2
  $("p").mouseover(function() {
    $(this).css("background-color", "yellow");
  }).mouseout(function() {
    $(this).css("background-color", "transparent");
  });

  // 3
  $("h2").click(function() {
    $(this).animate({
      "opacity": ".25",
      "margin-left": "20px",
    }).queue(() => {
      $(".speech").fadeTo("slow", .5);
    });
  });

  // 4
  $(document).keyup((e) => {
    const switcher = $("#switcher");
    switch(e.which) {
      case 37:
        switcher.animate({
          "left": "-=20"
        }, 100);
        break;
      case 38:
        switcher.animate({
          "top": "-=20"
        }, 100);
        break;
      case 39:
        switcher.animate({
          "left": "+=20"
        }, 100);
        break;
      case 40:
        switcher.animate({
          "top": "+=20"
        }, 100);
        break;
    }
  });
});
