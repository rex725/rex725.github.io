'use strict';
var windowWidth = $(window).width();

if (windowWidth <= 500) {
	$('body').html(
		'<div><img src="/img/cave_entrance.png" class="cave_entrances"></div>' +
		'<div><img src="/img/cave_entrance.png" class="cave_entrances"></div>' +
		'<div><img src="/img/cave_entrance.png" class="cave_entrances"></div>' +
		'<div><img src="/img/cave_entrance.png" class="cave_entrances"></div>' +
		'<div><img src="/img/cave_entrance.png" class="cave_entrances"></div>' +
		'<div><img src="/img/cave_entrance.png" class="cave_entrances"></div>'
	);
};
$('#first_cave').hover(
	function() {
		$('#level_one').text('Professional W bsite');
		$(this).css('background-image', 'url(/img/professional_website.png)');
		$(this).css('background-repeat', 'no-repeat');
		$(this).css('background-size', '15em 10em');
		$(this).css('background-position', '50% 30%');
		$('#level_one').css('z-index', '0');

	},
	function() {
		$('#level_one').text('Level 1');
		$(this).css('background-image', '');
	}
);
$('#second_cave').hover(
	function() {
		$('#level_two').text('Calculator');
		$(this).css('background-image', 'url(/img/calculator.png)');
		$(this).css('background-repeat', 'no-repeat');
		$(this).css('background-size', '15em 10em');
		$(this).css('background-position', '45% 30%');


	},
	function() {
		$('#level_two').text('Level 2');
		$(this).css('background-image', '');
	}
);
$('#third_cave').hover(
	function() {
		$('#level_three').text('Google API');
		$(this).css('background-image', 'url(/img/google_maps_api.png)');
		$(this).css('background-repeat', 'no-repeat');
		$(this).css('background-size', '15em 10em');
		$(this).css('background-position', '50% 30%');

	},
	function() {
		$('#level_three').text('Level 3');
		$(this).css('background-image', '');
	}
);
$('#arrowRight').click(function() {
	$('#first_cave').html("<h2><a href='#' id='level_four'>Level 4</a></h2><img src='/img/arrow_left.png' id='arrowLeft'>");
	$('#second_cave').html("<h2><a href='http://globetrotter.pro' id='level_five'>Level 5</a></h2>");
	$('#third_cave').html("<h2><a href='/html/home_page.html' id='level_six'>Level 6</a></h2>");
	$('#first_cave').hover(
		function() {
			$('#level_four').text('Oldlister');
			$(this).css('background-image', 'url(/img/adlister.png)');
			$(this).css('background-repeat', 'no-repeat');
			$(this).css('background-size', '15em 10em');
			$(this).css('background-position', '50% 30%');
			$('#level_one').css('z-index', '0');
	
		},
		function() {
			$('#level_four').text('Level 4');
			$(this).css('background-image', '');
		}
	);
	$('#second_cave').hover(
		function() {
			$('#level_five').text('Globetrotter');
			$(this).css('background-image', 'url(/img/globetrotter.png)');
			$(this).css('background-repeat', 'no-repeat');
			$(this).css('background-size', '15em 10em');
			$(this).css('background-position', '50% 30%');
			$('#level_one').css('z-index', '0');
		},
		function() {
			$('#level_four').text('Level 5');
			$(this).css('background-image', '');
		}
	);
	$('#arrowLeft').click(function() {
		location.reload();
	});
});