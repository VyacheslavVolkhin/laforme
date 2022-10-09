$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    $('.js-field-phone .field-button .btn').on('click', function() {
        $(this).parents('.js-field-phone').addClass('active');
        return false;
    })

    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })


    //btn tgl
    $('body').on('click', '.js-btn-tgl', function () {
        $(this).toggleClass('active');
        return false;
    })

    //swipebox
    $('[data-swipebox]').swipebox();
    
	
    //popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //actions-sliders-box
    if (!!$('.actions-sliders-box').offset()) {
        $('.actions-sliders-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
    }

    //actions-slider-box
    if (!!$('.actions-slider-box').offset()) {
        $('.actions-slider-box .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }


    //catalog-slider-box
    if (!!$('.catalog-slider-box').offset()) {
        $('.catalog-slider-box .slider').slick({
            dots: false,
            slidesToShow: 6,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }


    //item-tile-review
    if (!!$('.item-tile-review').offset()) {
        $('.item-tile-review .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }


    //photos slider box
    if (!!$('.photos-slider-box').offset()) {
        let slActivePosRight = 0;
        let slActivePosLeft = 0;
        let slActivePosMax = 0;
        let slActivePosRightDelta = 0;
        let slActivePosLeftDelta = 0;
        let slActiveScrollLeft = 0;
        let pSlider = $('.photos-slider-box .slider-wrap .slider').slick({
            dots: true,
            slidesToShow: 1,
            infinite: false,
            adaptiveHeight: true,
            appendDots: $('.slider-dots'),
            prevArrow: false,
            nextArrow: false,
            customPaging: function (slick, index) {
                var targetImage = slick.$slides.eq(index).find('.sl-wrap').attr('data-thumb');
                if (slick.$slides.eq(index).find('.sl-wrap').children('.elm-video').length > 0) {
                    return '<div class="elm-photo photo-actions photo-cover"><img src=" ' + targetImage + ' "/></div>';
                } else {
                    if (slick.$slides.eq(index).find('.sl-wrap').children('.elm-photo[data-thumb-type="photo-cover"]').length > 0) {
                        return '<div class="elm-photo photo-cover"><img src=" ' + targetImage + ' "/></div>';
                    } else if (slick.$slides.eq(index).find('.sl-wrap').children('.elm-photo[data-thumb-type="photo-contain"]').length > 0) {
                        return '<div class="elm-photo photo-contain"><img src=" ' + targetImage + ' "/></div>';
                    } else {
                        return '<div class="elm-photo"><img src=" ' + targetImage + ' "/></div>';
                    }
                }
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-second ico-arrow-next"></span>',
                    }
                },
            ]
        });
        //thumbs slider
        $('.photos-slider-box .slider-dots .slick-dots').slick({
            dots: false,
            slidesToShow: 8,
            vertical: true,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-up"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-down"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
        $('.photos-slider-box .slider-dots .slick-slide .elm-photo').on('click', function() {
            let cSlide = $(this).parents('.slick-slide').attr('data-slick-index');
            pSlider.slick('slickGoTo', cSlide);
        })
    }


    //gallery-slider-box
    if (!!$('.gallery-slider-box').offset()) {
        $('.gallery-slider-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                        dots: true,
                    }
                },
            ]
        });
    }


    //gallery slider
    if (!!$('.item-tile-object').offset()) {
        let pSlider = $('.item-tile-object .slider-wrap .slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                        dots: true,
                    }
                },
            ]
        });
        let pSliderPreview = $('.item-tile-object .slider-preview-wrap .slider').slick({
            dots: false,
            slidesToShow: 3,
            infinite: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            vertical: true,
        });
        //pSlider.slick('refresh');
        //pSliderPreview.slick('refresh');
        //$('.item-tile-object .slider-wrap .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            //$('.item-tile-object .slider-preview-wrap .sl-wrap.active').removeClass('active');
            //$('.item-tile-object .slider-preview-wrap .elm-photo[data-slide="' + currentSlide + '"]').parent().addClass('active');
        //});
        $('.item-tile-object .slider-preview-wrap .slider .tile-photo').click(function () {
            let newSlide = $(this).attr('data-slide');
            $(this).parents('.item-tile-object').find('.slider-preview-wrap').find('.sl-wrap.active').removeClass('active');
            $(this).parent().addClass('active');
            $(this).parents('.item-tile-object').find('.slider-wrap').find('.slider').slick('slickGoTo', newSlide);
            return false;
        })
    }
    
	
});
