$(document).ready(function() {
	$('#professional').hover(
		function() {
			$('#proffessional_header').addClass('header');
			$('#proffessional_header').text('Professional');
			$(this).css('opacity', .3);
		},
		function() {
			$('#proffessional_header').removeClass('header');
			$('#proffessional_header').text('');
			$(this).css('opacity', 1);
		}
	);
	$('#creative').hover(
		function() {
			$('#creative_header').addClass('header');
			$('#creative_header').text('Creative');
			$(this).css('opacity', .3);
		},
		function() {
			$('#creative_header').removeClass('header');
			$('#creative_header').text('');
			$(this).css('opacity', 1);
		}
	);
	var windowWidth = $(window).width();
	if (windowWidth <= 500) {
		console.log('firing');
		$('#proffessional_header').addClass('header');
		$('#proffessional_header').text('Professional');
		$('#creative_header').addClass('header');
		$('#creative_header').text('Creative');
	};
});