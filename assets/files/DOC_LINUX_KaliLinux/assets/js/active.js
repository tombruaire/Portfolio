jQuery(function($) {
    var path = window.location.href;
    $('div a').each(function() {
      	if (this.href === path) {
       		$(this).addClass('active');
      	}
    });
});