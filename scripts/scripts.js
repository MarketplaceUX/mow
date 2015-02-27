$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  $('#mynav').affix({
      offset: {
        top: $('header').height()
      }
	});

});


	