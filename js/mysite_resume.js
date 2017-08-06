'use strict';
var windowWidth = $(window).width();
console.log(windowWidth);
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
$('#javascript').hover( 
	function() {
		$(this).css('background-color','#fff');
		$(this).css('color', '#000');
		$('#character_box').html('<img src="/img/fireball_spell.gif" alt="character" id="fireball_spell">');
	},
	function() {
		$(this).css('background-color', '#000');
		$(this).css('color', '#fff');
		$('#character_box').html('<img src="/img/front_facing.png" alt="character" id="character">');
	}
);
$('#jquery').hover( 
	function() {
		$(this).css('background-color','#fff');
		$(this).css('color', '#000');
		$('#character_box').html('<img src="/img/poisoncloud_spell.gif" alt="character" id="spell_poisoncloud">');
	},
	function() {
		$(this).css('background-color', '#000');
		$(this).css('color', '#fff');
		$('#character_box').html('<img src="/img/front_facing.png" alt="character" id="character">');
	}
);
$('#php').hover( 
	function() {
		$(this).css('background-color','#fff');
		$(this).css('color', '#000');
		$('#character_box').html('<img src="/img/beam_spell.gif" alt="character" id="beam_spell">');
	},
	function() {
		$(this).css('background-color', '#000');
		$(this).css('color', '#fff');
		$('#character_box').html('<img src="/img/front_facing.png" alt="character" id="character">');
	}
);
$('#mysql').hover( 
	function() {
		$(this).css('background-color','#fff');
		$(this).css('color', '#000');
		$('#character_box').html('<img src="/img/teleportation_spell.gif" alt="character" id="spell_teleportation">');
	},
	function() {
		$(this).css('background-color', '#000');
		$(this).css('color', '#fff');
		$('#character_box').html('<img src="/img/front_facing.png" alt="character" id="character">');
	}
);
$('#laravel').hover( 
	function() {
		$(this).css('background-color','#fff');
		$(this).css('color', '#000');
		$('#character_box').html('<img src="/img/fire-djin_spell.gif" alt="character" id="spell_fire-djin">');
	},
	function() {
		$(this).css('background-color', '#000');
		$(this).css('color', '#fff');
		$('#character_box').html('<img src="/img/front_facing.png" alt="character" id="character">');
	}
);
