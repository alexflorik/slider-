$(function() {

	var numberOfSlide = 0;
	var windowWidth = $(window).width();
	var slideCount = 4;
	var sliderRowWidth = slideCount * windowWidth + 10;

	$('.slider-container .slider-row').css('width', sliderRowWidth + 'px');

	function slideController(value) {
		var distance = value * windowWidth * (-1);
		$('.slider-container .slider-row').css('transform', 'translateX(' + distance + 'px)');
		$('.slider-container .nav-dots .dot').removeClass('active');
		$('.slider-container .nav-dots .dot[data-slide="' + (value + 1) + '"]').addClass('active');
	}

	slideController(2);

    $('.slider-container .arrow.left').click(function() {
		numberOfSlide--;
		if (numberOfSlide < 0) {
			numberOfSlide = 3;
		}
		slideController(numberOfSlide);
	});
	$('.slider-container .arrow.right').click(function() {
		numberOfSlide++;
		if (numberOfSlide > 3) {
			numberOfSlide = 0;
		}
		slideController(numberOfSlide);
	});
	$('.slider-container .nav-dots .dot').click(function() {
		numberOfSlide = parseFloat($(this).attr('data-slide')) - 1;
		slideController(numberOfSlide);
	});

});
