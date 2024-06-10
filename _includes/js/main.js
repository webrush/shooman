// Dropdown Menu Fade on hover.
jQuery(document).ready(function(){
  if(navigator.userAgent.match(/Mobile/)){
	  if (screen.width < 780) {
		  $("[name=Sub_ID]").val('mobile');
	  } else {
		  $("[name=Sub_ID]").val('tablet');
	  }
  } else {
	  $("[name=Sub_ID]").val('desktop');
  }

  // Init default.
  // Verify if we are on the mobile breakpoint.
  var mobile = $('.device-xs, .device-sm').is(':visible');
  // Update value according to the window size.
  $(window).resize(function () {
     mobile = $('.device-xs, .device-sm').is(':visible');
  });

  // $('.anim').css({left:-1000, position: "absolute"});


  // Hide mobile menu when clicking outside.
  // Make sure it only execute on mobile.
  $(document).click(function(e) {
    if (mobile) {
      // If the clicked element is either the button or the menu itself then
      // do nothing and return early.
      if ($(e.target).closest('.navbar-collapse, .navbar-toggle').length) {
        return;
      }
      if ($('.navbar-collapse').is(':visible')) {
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggle').addClass("collapsed", 200);
      }
    }
  });

  // Display the modal lead form on the pros layout when clicking.
  // Make sure it only execute on mobile.
  $('.tbl-row *').click(function() {
    if (mobile) {
      var modalForm = $('#pros-lead-modal-wrapper');
      modalForm.modal();
      modalForm.modal('show');
    }
  });

  // Design extended side navigation on hover
  var toggle = function(){$(this).toggleClass("extended", 500);};
  $(".strip-navigation").hoverIntent(toggle, toggle);

  // Change phone icon image color upon form submit button hover.
  var toggle1 = function(){
    $(this).parents('.first-form').find('.icon-wrapper').toggleClass("active");
    $(this).parents('.second-form').find('.icon-wrapper').toggleClass("active");
  };

  $(".submit").hover(toggle1, toggle1);

  // Moving the bottom form
  $(window).scroll(function () {
    if (!$('.stop-block').length) {
      return;
    }
    // if($('.stop-block').parents(".row-bottom").offset().top - 1050 <= $('body').scrollTop()) {
    //   $('.anim').css({left: 0});
    // } else {
    //   $('.anim').css({left: -1000});
    // }
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      var form = $('.mobile-lead-form.collapsed');
      if (form.length) {
        form.css('visibility', 'hidden');
        setTimeout(function() { form.css('visibility', ''); }, 1000);
      }
    }
    if($(window).scrollTop() == 0 ){
    	$('#backToTop').css('display','none');
    	$('.floating-form.collapsed.collapsable').css({
    		top: 'initial',
    		bottom: '0'
    	});
	} else {
		$('#backToTop').css('display','block');
	}
  });
  $('#backToTop').on('click', function(){
      $("html, body").animate({scrollTop: 0}, 500);
      return false;
  });

  if($(".form-horizontal").hasClass("plastic-surgery")){
	  $(".header-main-menu td a").removeClass("active");
	  $(".header-main-menu td.plastic-surgery a").addClass("active");
  } else if ($(".form-horizontal").hasClass("aesthetic-treatment")){
	  $(".header-main-menu td a").removeClass("active");
	  $(".header-main-menu td.aesthetic-treatment a").addClass("active");
  } else if($(".form-horizontal").hasClass("body-toning")){
	  $(".header-main-menu td a").removeClass("active");
	  $(".header-main-menu td.body-toning a").addClass("active");
  }
});
