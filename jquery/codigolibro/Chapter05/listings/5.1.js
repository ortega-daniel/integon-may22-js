$(() => {
  $("div.chapter a").attr({ 
    rel: "external", 
    title: function() {
      return `Learn more about ${$(this).text()} en Wikipedia`
    }, 
    id: index => `wikilink=${index}`
   });

   $('#hide-read')
    .change((e) => {
      if ($(e.target).is(':checked')) {
        $('.chapter p')
          .filter((i, p) => $(p).data('read'))
          .hide();
      } else {
        $('.chapter p')
          .show();
      }
    });

    $('.chapter p')
    .click((e) => {
      const $elm = $(e.target);

      $elm
        .css(
          'textDecoration',
          $elm.data('read') ? 'none' : 'line-through'
        )
        .data('read', !$elm.data('read'));
    });

    //$('<a href="#top">back to top</a>').insertAfter('div.chapter p');
    
    $('<a id="top"></a>').prependTo('body');

    //$('span.footnote').insertBefore('#footer').wrapAll('<ol id="notes"></old>').wrap("<li>");

  //const $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
    
  /* $('span.footnote').each((i, span) => {
    $(`<sup>${i + 1}</sup>`).insertBefore(span);
    
    $(span).appendTo($notes).wrap('<li></li>');
  }); */

  // 1
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p:eq(2) ~ p');

  // 2
  $("a[href*=top]").click(function() {
    $(".you-were-here").remove();
    $(`<div class="you-were-here" style="color: blue;">you were here</div>`).insertAfter(this);
  });

  $("#f-author").click(function() {
    $(this).wrapInner("<strong>");
  });
});
