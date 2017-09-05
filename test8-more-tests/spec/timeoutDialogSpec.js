describe('Timeout Dialog', function () {

  describe('default state', function () {
    beforeEach(function () {
      $.timeoutDialog();
    });

    afterEach(function () {
      $("#timeout-dialog").remove();
      $("#timeout-overlay").remove();
    });

    it('displays a dialog and overlay', function () {
      expect($('#timeout-dialog')[0]).toBeInDOM();
      expect($('#timeout-overlay')[0]).toBeInDOM();
    });

    it('title should not exist', function () {
      expect($('#timeout-title')).not.toExist();
    });

    it('show default message', function(){
      expect($('#timeout-message')).toContainText('For security reasons, you will be signed out of this service in');
    })

    it('show default keep signed in button', function(){
      expect($('#timeout-keep-signin-btn')).toContainText('Stay signed in');
    })

    it('show default sign out button', function(){
      expect($('#timeout-sign-out-btn')).toContainText('Sign out now');
    })
  });

  describe('update options', function () {
    beforeEach(function () {
      //Pass in options
      $.timeoutDialog({
        title: 'You’re about to be signed out',
        keep_alive_button_text: 'Keep logged in',
        sign_out_button_text: 'Log out'
      });

    });

    afterEach(function () {
      $("#timeout-dialog").remove();
      $("#timeout-overlay").remove();
    });

    it('shows correct title', function () {
      expect($('#timeout-title')).toContainText('You’re about to be signed out');
    });

    it('show default keep signed in button', function(){
      expect($('#timeout-keep-signin-btn')).toContainText('Keep logged in');
    })

    it('show default sign out button', function(){
      expect($('#timeout-sign-out-btn')).toContainText('Log out');
    })
  });

});