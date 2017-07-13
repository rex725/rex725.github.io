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
$('#resume a').click(function(event) {
	console.log('firing');
		event.preventDefault();
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
		},1000);
		
});
$('#portfolio a').click(function(event) {
	console.log('firing');
		event.preventDefault();
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
		},1000);
		
});
$('#portfolio').hover(function() {
	$('#portfolio a').text('Portfolio');
});