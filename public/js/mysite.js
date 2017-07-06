$('.options').hide();
$('#start').click(function() {

	$('#resume').show(1500);
	$('#portfolio').delay(500).show(1500);
});

$('#resume').hover(function() {
	$('#resume').html('<a href="/html/mysite_resume.html">Resume</a>');
});
$('#portfolio').hover(function() {
	$('#portfolio').html('<a href="/html/mysite__portfolio.html">Portfolio</a>');
});