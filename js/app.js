$(_ => {
    console.log('Hola! Gracias por revisar mi código. Mi portafolio está en desarrollo y mis proyectos personales los iré agregando poco a poco. Para contacto o feedback escríbeme a mili01gm@gmail.com');

    $(window).on('scroll', () => {
        let scroll = $(window).pageYOffset || $(document).scrollTop();
        if (scroll > 20) {
            $('nav').addClass('bg-darker');
        } else {
            $('nav').removeClass('bg-darker');
        }
    });

    $(window).bind("resize", function() {
        console.log($(this).width())
        if ($(this).width() < 500) {
            $('.text-home-col').removeClass('flex');
        } else {
            $('.text-home-col').addClass('flex');
        }
    });


});