$(document).ready(function() {

  $(window).scroll(function() {
    var widy = window.top.scrollY;

    if (widy > 80) {
      $('#top-nav').addClass('nav-scrolled');
    } else {
      if ($('#top-nav').hasClass('showing-sub')) {
        // Do nothing
        $('#top-nav');
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
      $('#top-nav').prepend('<ul class=\'resp-nav\'>' + $('.tnav').html() + '</ul>');
    }

    return false;
  });

  $('[data-toggle="popover"]').popover();

  $('#package-details').on('show.bs.modal', function(event) {
    var selectedDetails = $(event.relatedTarget);
    var title = selectedDetails.parent().text();
    var data = selectedDetails.data('content');
console.log(data);
console.log(marked(data));
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(title);
    modal.find('.modal-body').html(marked(data));
  });

});
