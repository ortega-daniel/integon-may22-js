$(() => {
  $('#switcher-default').addClass('selected');

  $('#switcher button').click(function(e) {
    const bodyClass = this.id.split('-')[1];
    $('body').removeClass().addClass(bodyClass);
    
    $('#switcher button').removeClass();
    
    $(e.target).addClass('selected');
    e.stopPropagation();
  });

  const toggleSwitcher = (e) => {
    if (!$(e.target).is('button')) {
      $(e.currentTarget).children('button').toggleClass('hidden');
    }
  };

  $('#switcher-narrow, #switcher-large').click((e) => {
    $('#switcher').off('click.collapse');
  });

  $('#switcher').on('click.collapse', toggleSwitcher);

  /* $('#switcher').on('click.collapse', (e) => {
    if (!$(e.target).is('button')) {
      $(e.currentTarget).children('button').toggleClass('hidden');
    }
  }); */

  /* $('#switcher-narrow, #switcher-large').click(() => {
    $('#switcher').off('click');
  }); */

  /* $('#switcher h3').click(function() {
    $(this).siblings('button').toggleClass('hidden');
  }); */

  /* $('#switcher').click(function(e) {
    //if (e.target == this) {
      $(this).children("button").toggleClass('hidden');
    //}
  }); */

  /* $("#switcher").on("click.collapse", e => {
    $(e.currentTarget).children("button").toggleClass("hidden");
  }); */

  $('#switcher h3').hover(function() {
    $(this).addClass('hover');
    }, function() {
      $(this).removeClass('hover');
    });

    $("#switcher").trigger("click.collapse");

    const triggers = {
      D: 'default',
      N: 'narrow',
      L: 'large'
    };

    $(document).keyup((e) => {
      const key = String.fromCharCode(e.which);
      if (key in triggers) {
        $(`#switcher-${triggers[key]}`).click();
      }
    });
    
    // 1
    $(".author").click(function() {
      $(this).toggleClass("selected");
    });

    // 2
    $(".chapter-title").dblclick(function() {
      $(this).siblings().toggle();
    });

    // 3
    let bodyClassIdx = 0;
    let bodyClasses = ["default", "narrow", "large"]

    $(document).keyup((e) => {
      if (e.which === 39) {
        $(`#switcher-${bodyClasses[++bodyClassIdx % bodyClasses.length]}`).click();
      }
    });
    
});
