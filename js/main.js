$(document).ready(function () {
	/*************TIMER**************/
	var clock = $('.clock').FlipClock({
		clockFace: 'DailyCounter',
		autoStart: false,
		callbacks: {
			stop: function () {
				$(".black-friday-show").hide();
				$(".black-friday-hide").show();
			}
		}
	});

	clock.setTime(100); /*Set Time*/
	clock.setCountdown(true);
	clock.start();
	/*************TIMER END**************/

	$('#sandwich').click(function () {
		$('.sandwich').show();
	})

	$('.close-nav').click(function () {
		$('.sandwich').hide();
	})

	$('.container-fluid a').mPageScroll2id();
});
