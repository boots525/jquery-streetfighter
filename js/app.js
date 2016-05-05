$(document).ready(function(){
	playThemeSong();
		$('.instructions').hide();
		$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.hulk-ryu-ready').show();
		$('.hulk-ryu-still').hide();
		$('.logo').hide();
		$('.instructions').show();
		$('.ryu-cool').hide();
		
	})
	.mouseleave(function() {
		$('instructions').hide();
		$('.ryu-ready').hide();
		$('.hulk-ryu-ready').hide
		$('.ryu-still').show();
		$('.hulk-ryu-still').show();
		$('.logo').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.instructions').hide()
		$('.ryu-ready').hide();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-throwing').show();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500, 
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
			); 
		$('.reverse-hadouken').finish().show().animate(
		{'right': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('right', '320px');
		}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();;
		$('.hulk-ryu-throwing').hide();
		$('.hulk-ryu-ready').show();
		$('.ryu-ready').show();
	})
});

$(document).keydown(function(e){
		if (e.which === 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
		if (e.which === 90) {
			$('.hulk-ryu-cool').show();
			$('.hulk-ryu-ready').hide();
			$('.hulk-ryu-still').hide();

		}
	});
$(document).keyup(function(e){
	if (e.which === 88) {
		$('.ryu-cool').hide;
		$('.ryu-ready').hide;
		$('.ryu-still').show();	
	}
	if (e.which === 90) {	
		$('.hulk-ryu-cool').hide();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-still').show();
	}
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playThemeSong () {
	$('#themesong')[0].volume = 0.5;
	$('#themesong')[0].load();
	$('#themesong')[0].play();
}
