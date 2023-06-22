// loader timeout 
setTimeout(() => {
  $(".loader").fadeOut();
}, 2000);

/* profile uploaded images, private videos, favorite videos, viewed contents section */
// account images toggler
$(document).ready(function() {
  $('.line-through').click(function() {
    $('.images').show();
    $('.private').hide();
    $('.favorite').hide();
    $('.viewed').hide();
    $('.first').addClass('active');
    $('.second').removeClass('active');
    $('.third').removeClass('active');
    $('.fourth').removeClass('active');
    $('.first .line-through').css('color', 'black');
    $('.second .fa-lock').css('color', 'inherit');
    $('.third .fa-bookmark, .third .fa-eye-slash').css('color', 'inherit');
    $('.fourth .fa-heart, .fa-eye-slash').css('color', 'inherit');
  })
})
// private videos toggler
$(document).ready(function() {
  $('.fa-lock').click(function() {
    $('.private').show();
    $('.images').hide();
    $('.favorite').hide();
    $('.viewed').hide();
    $('.second').addClass('active');
    $('.first').removeClass('active');
    $('.third').removeClass('active');
    $('.fourth').removeClass('active');
    $('.second .fa-lock').css('color', 'black');
    $('.first .line-through').css('color', 'inherit');
    $('.third .fa-bookmark, .third .fa-eye-slash').css('color', 'inherit');
    $('.fourth .fa-heart, .fa-eye-slash').css('color', 'inherit');
  })
})
// favorite videos toggler
$(document).ready(function() {
  $('.third .fa-bookmark, .third .fa-eye-slash').click(function() {
    $('.favorite').show();
    $('.images').hide();
    $('.private').hide();
    $('.viewed').hide();
    $('.third').addClass('active');
    $('.second').removeClass('active');
    $('.first').removeClass('active');
    $('.fourth').removeClass('active');
    $('.third .fa-bookmark, .third .fa-eye-slash').css('color', 'black');
    $('.fourth .fa-heart, .fourth .fa-eye-slash').css('color', 'inherit');
    $('.first .line-through').css('color', 'inherit');
    $('.second .fa-lock').css('color', 'inherit');
  })
})
// viewed contents toggler
$(document).ready(function() {
  $('.fourth .fa-heart, .fourth .fa-eye-slash').click(function() {
    $('.viewed').show();
    $('.images').hide();
    $('.private').hide();
    $('.favorite').hide();
    $('.fourth').addClass('active');
    $('.second').removeClass('active');
    $('.first').removeClass('active');
    $('.third').removeClass('active');
    $('.fourth  .fa-heart, .fourth .fa-eye-slash').css('color', 'black');
    $('.third .fa-bookmark, .third .fa-eye-slash').css('color', 'inherit');
    $('.second .fa-lock').css('color', 'inherit');
    $('.first .line-through').css('color', 'inherit');
  })
})
