 $(function () {

    $(".menu a, .on-top").on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});



    $('.slider__inner').slick({
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="img/arrowl.svg" alt="left-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="img/arrowr.svg" alt="right-arrow"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }

            },
        ]

    });

    $('.slider__logo-inner').slick({
        dots: false,
        slidesToShow: 6,
        autoplay: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="img/arrowl.svg" alt="left-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="img/arrowr.svg" alt="right-arrow"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }

            },
        ]

    });

    $('.menu_icon, .menu a').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
        
    })


    var mixer = mixitup('.portfolio__content');
})