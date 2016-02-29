$(document).ready(function() {
  var navTarget = $('.table-of-contents');
  var navLink = $('.show-table');
  var toc = $('#TOC');
  var tocJs = toc.addClass('with-javascript');
  var topics = $('#TOC ul').find('a');

  var shiftWindow = function() {
    var headerOffset = -96;
    scrollBy(0, headerOffset);
    return this;
  };

  navTarget.click(function() {
    if (navLink.hasClass('open')) {
      tocJs.removeClass('slide-down');
      navLink.removeClass('open');
    } else {
      tocJs.addClass('slide-down');
      navLink.addClass('open');
    }
    return false;
  });

  topics.each(function(index, el) {
    var elem = $(el);

    elem.click(function() {
      tocJs.removeClass('slide-down');
      navLink.removeClass('open');

      if (location.hash) {
        shiftWindow();
      }

      window.addEventListener("hashchange", shiftWindow);
    });
  });

  if (location.hash) {
    shiftWindow();
  }
});
