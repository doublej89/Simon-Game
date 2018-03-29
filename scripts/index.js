const RED = 0;
const GREEN = 1;
const BLUE = 2;
const YELLOW = 3;

var givenSeq = [];
var playerSeq = [];
var step = 0;
var gameOn = false;
var strictMode = false;

$(document).ready(function() {
	$('.start').click(function(event) {
		step++;
		$('.counter').text(step);
		var randomNum = Math.floor(Math.random()*4);
		givenSeq.push(randomNum);
		padHighlightAndSound();
	});

	$('.switch').click(function() {
		const inner = $('.inner');
		if (!gameOn) {
			inner.css('transform', 'translateX(30px)');
			gameOn = true;
		} else {
			inner.css('transform', 'translateX(0)');
			gameOn = false;
		}
	});

	$('.pad').click(function(event) {
		if (!gameOn) {
			console.log('game not switched on');
			return;
		}		
		var color = $(this).attr('class').split(' ')[1];
		switch (color) {
			case 'red':
				$(this).addClass('red-active');
				playSound('audio/simonSound1.mp3').play();
				setTimeout(function() {
					$(this).removeClass('red-active');
				}.bind($(this)), 500);
				playerSeq.push(RED);
				break;
			case 'green':
				$(this).addClass('green-active');
				playSound('audio/simonSound2.mp3').play();
				setTimeout(function() {
					$(this).removeClass('green-active');
				}.bind($(this)), 500);
				playerSeq.push(GREEN);
				break;
			case 'blue':
				$(this).addClass('blue-active');
				playSound('audio/simonSound3.mp3').play();
				setTimeout(function() {
					$(this).removeClass('blue-active');
				}.bind($(this)), 500);
				playerSeq.push(BLUE);
				break;
			case 'yellow':
				$(this).addClass('yellow-active');
				playSound('audio/simonSound4.mp3').play();
				setTimeout(function() {
					$(this).removeClass('yellow-active');
				}.bind($(this)), 500);
				playerSeq.push(YELLOW);
		}	
		if (step > 0 && playerSeq.length === step && JSON.stringify(givenSeq) === JSON.stringify(playerSeq)) {
			step++;
			$('.counter').text(step);
			playerSeq = [];
			var randomNum = Math.floor(Math.random()*4);
			givenSeq.push(randomNum);
			padHighlightAndSound();
		} else if (step > 0 && playerSeq.length === step) {
			playerSeq = [];
			if (strictMode) {
				givenSeq = [];
				step = 1;
				$('.counter').text(step);
				var randomNum = Math.floor(Math.random()*4);
				givenSeq.push(randomNum);
			}
			padHighlightAndSound();
		}
	});

	$('.strict').click(function() {
		strictMode = !strictMode;
	});
});

function padHighlightAndSound() {
	var i = 0;
	var sequenceInterval = setInterval(function() {
		if (i === step) {
			clearInterval(sequenceInterval);
		} else {
			switch (givenSeq[i]) {
				case RED:
					$('.red').addClass('red-active');
					playSound('audio/simonSound1.mp3').play();
					setTimeout(function() {
						$('.red').removeClass('red-active');
					}, 500);
					break;
				case GREEN:
					$('.green').addClass('green-active');
					playSound('audio/simonSound2.mp3').play();
					setTimeout(function() {
						$('.green').removeClass('green-active');
					}, 500);
					break;
				case BLUE:
					$('.blue').addClass('blue-active');
					playSound('audio/simonSound3.mp3').play();
					setTimeout(function() {
						$('.blue').removeClass('blue-active');
					}, 500);
					break;
				case YELLOW:
					$('.yellow').addClass('yellow-active');
					playSound('audio/simonSound4.mp3').play();
					setTimeout(function() {
						$('.yellow').removeClass('yellow-active');
					}, 500);
			}		
			i++;
		}
	}, 1000);
}

function playSound(path) {
	var sound = new Audio();
	sound.src = path;
	return sound;
}