$(document).ready(function () {
	/*************TIMER**************/
	var clock = $('.clock').FlipClock({
		clockFace: 'DailyCounter',
		autoStart: false,
		callbacks: {
			stop: function () {
				$(".message").html("df");
			}
		}
	});

	clock.setTime(4000);
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
