// Initiates "sticking-to-top" elements.
$(document).ready(function() {

  var stickyElement = $('.sticky');
  if (stickyElement.length) {
    stickyElement.stickToTop({offset: {top: 45}});
  }

  var stickyElement2 = $('.sticky-form');
  if (stickyElement2.length) {
    stickyElement2.stickToTop({offset: {top: 45}});
  }
});

// Handle un-collapsing the sticky mobile form (When not having hover).
$(document).ready(function() {
  $('.collapsed *').click(function(event) {
    // Don't execute in case we want to collapse the element using the collapse button.
    if ($(event.target).closest('.collapsed-button').length) {
      return;
    }
    var collapsedElement = $(event.currentTarget).parents('.collapsed');
    if (collapsedElement.hasClass('collapsed')) {
      event.preventDefault();
      collapsedElement.removeClass('collapsed');
    }
  });
});

// Handle collapsing button.
$(document).ready(function() {
  $('.collapsed-button').on("click touchend",function(event){
    event.preventDefault();
    var $parent = $(event.currentTarget).parents('.collapsable');
    $parent.addClass('collapsed');
  });
});
