var projectView = {};

projectView.populateFilter = function() {
  $('.project').each(function() {
    if (!$(this).hasClass('template')) {
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      console.log(optionTag);
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('.project').hide();
      $('.project[data-category = "' + $(this).val() + '"]').fadeIn();
    } else {
      $('.project').show();
      $('.template').hide();
    }
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.setTeaser = function() {
  $('.project-descript *:nth-child(n+3)').hide();
  $('.read-on').each(function(e) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $(this).parent().find('.project-descript *:nth-child(n+3)').fadeIn();
      $(this).hide();
    });

  });
};

$(function() {
  projectView.populateFilter();
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.setTeaser();
});
