
!function ($) {
  $.timeoutDialog = function () {
    $('<div id="timeout-dialog" class="timeout-dialog" role="dialog" aria-labelledby="timeout-message" tabindex="-1" aria-live="polite">' +
      '<p class="heading-medium push--top">Youre about to be signed out</p>' +
      '<p id="timeout-message" class="timeout-message" role="text">For your security reasons, you will be signed out of this service in <span id="timeout-countdown" class="countdown">2 minutes</span></p>' +
      '<button id="timeout-keep-signin-btn" class="button">Stay signed in</button>' +
      '<button id="timeout-sign-out-btn" class="button button--link select">Sign out now</button>' +
      '</div>' +
      '<div id="timeout-overlay" class="timeout-overlay"></div>').appendTo('body');
  }

}(window.jQuery)