$(document).ready(function() {
    $(window).on("scroll", function(){
        if($(window).scrollTop())
        {
            $('.nav-wrapper').addClass('black-bg');
        }
        else
        {
            $('.nav-wrapper').removeClass('black-bg');
            $('.mobile-nav-wrapper').removeClass('black-bg');
        }
    });

    $('.burger').on('click', function(){
        $('.nav-bar').toggleClass('active');
        $('.nav-wrapper').toggleClass('black-bg');

    });

});

  



