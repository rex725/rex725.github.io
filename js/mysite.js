$('.options').hide();
$('#start').click(function() {

	$('#resume').show(1500);
	$('#portfolio').delay(500).show(1500);
	setTimeout(function() {
		$('.character_selector').html('<img src="/img/standing.gif" id="actor_standing" alt="character">');
	}, 550);
	setTimeout(function() {
		$('.character_selector').html('<img src="/img/looking_left.png" id="actor_looking_left" alt="character">')
	}, 1100);
	setTimeout(function() {
		$('.character_selector').html('<img src="/img/looking_right.png" id="actor_looking_left" alt="character">')
	}, 1650);
});

$('#resume').hover(function() {
	$('#resume a').text('Resume');
});
$('#resume a').one('click', function(event) {
	var runAnimation = true;
	var windowWidth = $(window).width();
	event.preventDefault();
	if (windowWidth <= 500) {
		console.log('firing');
		setTimeout(function() {
			window.location.href = '/html/mysite_resume.html';
		},3500);
		$('.character_selector').html('<img src="/img/sword_swing_right.gif" id="actor_swinging_sword" alt="character">');
		setTimeout(function() {
			$('.character_selector').html('<img src="/img/walking_right.gif" id="actor_walking" alt="character">');
			setInterval(function() {
				$('#actor_walking').animate({
						left: '+=30px'
				});
			}, 10);
		}, 1000);
	} else {
		setTimeout(function() {
			window.location.href = '/html/mysite_resume.html';
		},9000);
		$('.character_selector').html('<img src="/img/sword_swing_right.gif" id="actor_swinging_sword" alt="character">');
		setTimeout(function() {
			$('.character_selector').html('<img src="/img/walking_right.gif" id="actor_walking" alt="character">');
			setInterval(function() {
				$('#actor_walking').animate({
						left: '+=30px'
				});
			}, 10);
		}, 1000);
	};		
});
$('#portfolio a').one('click', function(event) {
	console.log('firing');
	var windowWidth = $(window).width();
	event.preventDefault();
	if (windowWidth <= 500) {
		console.log('firing');
		setTimeout(function() {
			window.location.href = '/html/mysite_portfolio.html';
		},3500);
		$('.character_selector').html('<img src="/img/sword_swing_right.gif" id="actor_swinging_sword" alt="character">');
		setTimeout(function() {
			$('.character_selector').html('<img src="/img/walking_right.gif" id="actor_walking" alt="character">');
			setInterval(function() {
				$('#actor_walking').animate({
						left: '+=30px'
				});
			}, 10);
		}, 1000);
	} else {
		setTimeout(function() {
			window.location.href = '/html/mysite_portfolio.html';
		},9000);
		$('.character_selector').html('<img src="/img/sword_swing_right.gif" id="actor_swinging_sword" alt="character">');
		setTimeout(function() {
			$('.character_selector').html('<img src="/img/walking_right.gif" id="actor_walking" alt="character">');
			setInterval(function() {
				$('#actor_walking').animate({
						left: '+=30px'
				});
			}, 10);
		}, 1000);
	};		
});
$('#portfolio').hover(function() {
	$('#portfolio a').text('Portfolio');
});