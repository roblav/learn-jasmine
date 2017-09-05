
module.exports = function (options) {
  var settings = {
    timeout: 900,
    countdown: 120,
    time: 'minutes',
    title: 'You’re about to be signed out',
    message: 'For your security reasons, you will be signed out of this service in',
    keep_alive_url: '/keep-alive',
    logout_url: '/sign-out',
    restart_on_yes: true,
    dialog_width: 340,
    close_on_escape: true,
    background_no_scroll: true,
    keep_alive_button_text: 'Get another {0} minutes',
    sign_out_button_text: 'Sign out now'
  }

  $.extend(settings, options)

}