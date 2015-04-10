$(document).ready(function() {

	$( window ).scroll(function() {
		var widy = window.top.scrollY;

		if( widy > 80 ) {
			$('#top-nav').addClass('nav-scrolled');
		} else {
			if ($('#top-nav').hasClass('showing-sub')) {

			} else {
				$('#top-nav').removeClass('nav-scrolled');				
			}
		}

	});

	$('.show-submenu-mobile').on('click', function() {

		//-- Add a menu to the top of the nav
		if ($('#top-nav').hasClass('showing-sub')) {
			//-- Remove
			$('#top-nav').removeClass('showing-sub');	
			$('body').removeClass('allow-for-submenu');
			$('.resp-nav').remove();
		} else {
			//-- Add
			$('#top-nav').addClass('nav-scrolled showing-sub');
			$('body').addClass('allow-for-submenu');
			$('#top-nav').prepend("<ul class='resp-nav'>" + $('.tnav').html() + "</ul>");
		}

		return false;
	});

});