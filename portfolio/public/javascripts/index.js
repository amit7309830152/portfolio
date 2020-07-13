$(document).ready(function() {
    $(window).scroll(function() {
        let scrl_top = $(window).scrollTop();
        if (scrl_top < 10 && scrl_top < 100) {
            $('.text-on-intro').removeClass('animate__animated animate__backOutRight');
            $('.text-on-intro').addClass('animate__animated animate__bounceInLeft');
        }
        if (scrl_top > 10) {
            $('.text-on-intro').removeClass('animate__animated animate__bounceInLeft');
            $('.text-on-intro').addClass('animate__animated animate__backOutRight');
        }


        if (scrl_top > 700) {
            $('.tech-use-frontend').fadeIn(1000);
            $('.reactjs').addClass('animate__animated animate__backInLeft');
            $('.html').addClass('animate__animated animate__backInLeft');
            $('.js').addClass('animate__animated animate__backInDown');
            $('.css').addClass('animate__animated animate__backInRight');
            $('.bootstrap').addClass('animate__animated animate__backInRight');
        }

        if (scrl_top > 999) {
            $('.tech-use-backend').fadeIn(1000);
        }

        if (scrl_top > 1600) {
            $('.know-1').addClass('animate__animated animate__headShake');
            $('.know-2').addClass('animate__animated animate__headShake');
        }

        if (scrl_top > 2138) {
            $('.sayhello h1').addClass('animate__animated animate__swing');
        }
    });
    setTimeout(function() {
        $('.text-on-intro').show()
        $('.text-on-intro').addClass('animate__animated animate__bounceInLeft');
    }, 1500);
});