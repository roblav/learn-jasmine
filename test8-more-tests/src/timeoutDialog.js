
!function ($) {

  $.timeoutDialog = function (options) {
    var settings ={
      title: '',
      message: 'For security reasons, you will be signed out of this service in',
      keep_alive_button_text: 'Stay signed in',
      sign_out_button_text: 'Sign out now'
    }

    $.extend(settings, options)

    // If there is settings.title text include the markup
    if (settings.title !== '') {
      settings.title = '<p id="timeout-title" class="heading-medium push--top">' + settings.title + '</p>'
    }

    $('<div id="timeout-dialog" class="timeout-dialog" role="dialog" aria-labelledby="timeout-message" tabindex="-1" aria-live="polite">' +
      settings.title +
      '<p id="timeout-message" class="timeout-message" role="text">' + settings.message + '<span id="timeout-countdown" class="countdown">2 minutes</span></p>' +
      '<button id="timeout-keep-signin-btn" class="button">' + settings.keep_alive_button_text + '</button>' +
      '<button id="timeout-sign-out-btn" class="button button--link select">' + settings.sign_out_button_text + '</button>' +
      '</div>' +
      '<div id="timeout-overlay" class="timeout-overlay"></div>').appendTo('body');
  }

}(window.jQuery)