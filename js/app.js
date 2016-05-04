$(document).ready(function(){
	playThemeSong();
	$('.instructions').hide();

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.logo').hide();
		$('.instructions').show();
		$('.ryu-cool').hide();
		
	})
	.mouseleave(function() {
		$('playThemeSong').stop();
		$('instructions').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.logo').show();
	})
	.mousedown(function() {
		playHadouken();
		$('playThemeSong').stop();
		$('playTrue').stop();
		$('.instructions').hide()
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500, 
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
			); 
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
//animate hadouken to right of screen
});

$(document).keydown(function(e){
		if (e.which === 88) {
			playTrue();
			$('#themesong')[0].pause();
			$('#true')[0].pause();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	});
$(document).keyup(function(e){
	if (e.which === 88) {
		$('.ryu-cool').hide;
		$('.ryu-ready').hide;
		$('.ryu-still').show;
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

function playTrue () {
	$('#true')[0].volume = 0.5;
	$('#true')[0].load();
	$('#true')[0].play();
}


