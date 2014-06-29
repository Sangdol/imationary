// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var $dicIframe, $iframes, $imagesIframe, $input, $search, $toggle, $x, DIC_URL_PREFIX, IMAGES_URL_PREFIX, bindEvents, init, search;
    DIC_URL_PREFIX = 'http://alldic.daum.net/search.do?dic=eng&q=';
    IMAGES_URL_PREFIX = 'https://duckduckgo.com/?%3Fiax=1&iax=1&ia=images&q=';
    $input = $('input');
    $search = $('#search');
    $x = $('#x');
    $dicIframe = $('iframe.dic');
    $imagesIframe = $('iframe.images');
    $toggle = $('.toggle');
    $iframes = $('iframe');
    search = function() {
      var query;
      query = $input.val();
      if (query === '') {
        return;
      }
      $dicIframe.prop('src', DIC_URL_PREFIX + query);
      $imagesIframe.prop('src', IMAGES_URL_PREFIX + query);
    };
    (bindEvents = function() {
      $input.on('keydown', function(e) {
        if (e.which === 13) {
          return search();
        }
      });
      $search.click(search);
      $x.click(function() {
        $input.val('');
        return $input.focus();
      });
      $toggle.on('click tap', function() {
        $iframes.toggle();
        return false;
      });
    })();
    return (init = function() {
      return $input.focus();
    })();
  });

}).call(this);
