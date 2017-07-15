'use strict';
$('#html').hover( 
	function() {
		$(this).css('background-color','#fff');
		$(this).css('color', '#000');
		$('#character_box').html('<img src="/img/shield_spell.gif" alt="character" id="spell_shield">');
	},
	function() {
		$(this).css('background-color', '#000');
		$(this).css('color', '#fff');
		$('#character_box').html('<img src="/img/front_facing.png" alt="character" id="character">');
	}
);
$('#css').hover( 
	function() {
		$(this).css('background-color','#fff');
		$(this).css('color', '#000');
		$('#character_box').html('<img src="/img/heal_spell.gif" alt="character" id="spell_heal">');
	},
	function() {
		$(this).css('background-color', '#000');
		$(this).css('color', '#fff');
		$('#character_box').html('<img src="/img/front_facing.png" alt="character" id="character">');
	}
);