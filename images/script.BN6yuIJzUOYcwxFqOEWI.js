// Copy TistoryToolbar to Sidebar
$(document).ready(function() {
  $('.menu_toolbar > #menubar_wrapper > .header_layer').appendTo('#__sidebar > #sidebar__shadow > #sidebar__tistory');
});
// Copy TistoryToolbar to Body
$(document).ready(function() {
  $('.menu_toolbar > div[class=btn_tool]').appendTo('#__nav > #nav__s2');
  $('#__nav > #nav__s2 > div[class=btn_tool] > .btn_menu_toolbar.btn_subscription').append('<i class="fa fa-star"></i>');
});
// Loader Out
$(document).ready(function() {
  setTimeout(function() {
    return $('#__loader').fadeOut(500);
  }, 2);
});
// Scoll Indicator
$(document).ready(function() {
  $(window).on('scroll', function() {
    var winScroll = $(window).scrollTop();
    var height = $(document).outerHeight() - $(window).height();

    $('#scroll-indicator .progress-bar').css('width', winScroll / height * 100 + '%');
  });
});
// Copy metainfo to Navigation header
$(document).ready(function() {
  var $h = $('.content__permalink > header > .heading > *:not(.metainfo)');
  var $metainfo = $('#__nav > #nav__metainfo');
  // Only for permalink
  if ($h.length) {
    $metainfo.empty();
    $h.each(function(_, $h) {
      return $metainfo.append($($h).clone());
    });
  }
});
// Sidebar Toogle
$(document).ready(function() {
  var $sidebar = $('#__sidebar');
  var $m = $('#sidebar__mask');

  $('#__nav > #nav__s1 > .profile').on('click', function() {
    $sidebar.css('left', 0);
    $m.fadeIn(200);
  });
  $m.on('click', function() {
    $sidebar.css('left', '-250px');
    $m.fadeOut(200);
  });
});
// Copy report button to form control
$(document).ready(function() {
  $('.content__list > ol > li .header').each(function() {
    var $report = $(this).find('.metainfo > .date > a');
    $(this).parent().find('.control').append($report);
  });
});
// Post
$(document).ready(function() {
  // Media contents alignment
  h.Post.Permalink.alignImageCenter({
    imageSlideBlock: true,
    imageBlock: true,
    imageGridBlock: true
  });
  // Add 'a' tag into headings
  h.Post.Permalink.headings('.content__permalink .content', 'h2, h3, h4');

  // Code Highlighting
  hljs.initHighlighting();
  h.Theme.hljs();
});
// Tags
$(document).ready(function() {
  $('.permalink__tags').contents().filter(function() {
    return this.nodeType === 3;
  }).remove();
});
// PostBtn
$(document).ready(function() {
  // Trgger 'click' event for TistoryEtcLayer Display
  $('.container_postbtn .wrap_btn_etc > button').trigger('click');
});
// TistoryLayer
$(document).ready(function() {
  var $tistoryLayer = $('#tistoryEtcLayer, #tistorySnsLayer');

  // Remove button texts
  $tistoryLayer.find('.btn_mark').empty();
  // Move into 'Bun'
  $tistoryLayer.appendTo('.content__permalink .permalink__btn');
});
// Set timer for Notification
$(document).ready(function() {
  var delay = 3000;

  setTimeout(function() {
    h.Post.Permalink.notify('#next', 'bottom-right', 15000);
    h.Post.Permalink.notify('#prev', 'bottom-left', 15000);
  }, delay);
});
// Remove list element when notice permalink page
$(document).ready(function() {
  $('#tt-body-page #__notice > .__list[data-mode]').remove();
});
// Scrollspy
$(document).ready(function() {
  var $context = $('.content__permalink .content');

  if ($context.length) {
    var $spy = h.Post.Permalink.scrollspy({
      context: '.content__permalink .content',
      spy: '#__spy ul',
      headings: 'h2, h3'
    });

    var _$context$position = $context.position(),
      top = _$context$position.top;

    $spy.css({
      top: top + 50,
      height: $context.height() + 53
    });
  }
});
// Switch theme
$(document).ready(function() {
  $('#__theme-btn').on('click', function() {
    h.Theme.switch();
    h.Theme.hljs();
  });
});
