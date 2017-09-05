describe('Timeout Dialog', function(){
  
  beforeEach(function(){
    $.timeoutDialog();
  });

  afterEach(function() {
	  $("#timeout-dialog").remove();
	  $("#timeout-overlay").remove();
  });

  it('displays a dialog', function(){
    expect($('#timeout-dialog')[0]).toBeInDOM();
    expect($('#timeout-overlay')[0]).toBeInDOM();
  });

});