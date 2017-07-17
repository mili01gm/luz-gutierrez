$(_ => {
    $('.parallax').parallax();
    console.log('Hola! Gracias por revisar mi código. Mi portafolio está en desarrollo y mis proyectos personales los iré agregando poco a poco. Para contacto o feedback escríbeme a mili01gm@gmail.com');

    $(window).on('scroll', () => {
        let scroll = $(window).pageYOffset || $(document).scrollTop();
        if (scroll > 20) {
            $('nav').addClass('bg-darker');
        } else {
            $('nav').removeClass('bg-darker');
        }
    });
});