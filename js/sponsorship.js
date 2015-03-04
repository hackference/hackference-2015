$(document).ready(function(){
  var onHoverIn = function(){
    $(this).children('sub').removeClass('hidden');
  }
  var onHoverOut = function(){
    $(this).children('sub').addClass('hidden');
  }
  $('#sponsorship-tiers th').hover(onHoverIn,onHoverOut);
});
