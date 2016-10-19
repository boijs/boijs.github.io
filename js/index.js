(function(window, $) {
  var CLASS_SHOW = 'show';

  var STEP_SWIPE = 30;

  var $body = $(document.body);

  var tap = isPhone() ? 'touchend' : 'click';

  var swipe = {
    start: 0,
    end: 0
  };

  function isPhone() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      return true;
    } else {
      return false;
    }
  }

  $(document).on(tap, '.boi-index-stage .stage-action', function(event) {
    $body.addClass(CLASS_SHOW);
  }).on('touchstart', '.boi-index-stage', function(event) {
    var ev = event || window.event;
    var locate = ev.originalEvent.touches[0] || ev.originalEvent.changedTouches[0];
    swipe.start = locate.screenY;
  }).on('touchend', '.boi-index-stage', function(event) {
    var ev = event || window.event;
    var locate = ev.originalEvent.touches[0] || ev.originalEvent.changedTouches[0];
    swipe.end = locate.screenY;
    if (swipe.start - swipe.end >= STEP_SWIPE) {
      $body.addClass(CLASS_SHOW);
    }
  }).on('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    var ev = event || window.event;
    var step = ev.originalEvent.wheelDeltaY || -ev.originalEvent.detailY;
    // 如果滚动距离小于阈值则不做响应
    if (!$body.hasClass(CLASS_SHOW) && (Math.abs(step) >= STEP_SWIPE)) {
      $body.addClass(CLASS_SHOW);
    }
  });

})(window, jQuery, undefined);
