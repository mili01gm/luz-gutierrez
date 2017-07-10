$(_ => {
    $('.button-collapse').sideNav();

    $(window).on('scroll', () => {
        let scroll = $(window).pageYOffset || $(document).scrollTop();
        if (scroll > 20) {
            $('nav').addClass('bg-darker');
        } else {
            $('nav').removeClass('bg-darker');
        }
    });
});