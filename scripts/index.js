const RED = 0;
const GREEN = 1;
const BLUE = 2;
const YELLOW = 3;

var givenSeq = [];
var playerSeq = [];
var step = 0;

$(document).ready(function() {
	$('.start').click(function(event) {
		step++;
		$('.counter').text(step);
		var randomNum = Math.floor(Math.random()*4);
		givenSeq.push(randomNum);
		padHighlightAndSound();
	});

	$('.pad').click(function(event) {
			
		var color = $(this).attr('class').split(' ')[1];
		if (color === 'red') {
			$(this).addClass('red-active');
			setTimeout(function() {
				$(this).removeClass('red-active');
			}.bind($(this)), 500);
			playerSeq.push(RED);
		} else if (color === 'green') {
			$(this).addClass('green-active');
			setTimeout(function() {
				$(this).removeClass('green-active');
			}.bind($(this)), 500);
			playerSeq.push(GREEN);
		} else if (color === 'blue') {
			$(this).addClass('blue-active');
			setTimeout(function() {
				$(this).removeClass('blue-active');
			}.bind($(this)), 500);
			playerSeq.push(BLUE);
		} else if (color === 'yellow') {
			$(this).addClass('yellow-active');
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
			padHighlightAndSound();
		}
	});
});

function padHighlightAndSound() {
	var i = 0;
	var sequenceInterval = setInterval(function() {
		if (i === step) {
			clearInterval(sequenceInterval);
		} else {		
			if (givenSeq[i] === RED) {
				$('.red').addClass('red-active');
				setTimeout(function() {
					$('.red').removeClass('red-active');
				}, 500);
			} else if (givenSeq[i] === GREEN) {
				$('.green').addClass('green-active');
				setTimeout(function() {
					$('.green').removeClass('green-active');
				}, 500);
			} else if (givenSeq[i] === BLUE) {
				$('.blue').addClass('blue-active');
				setTimeout(function() {
					$('.blue').removeClass('blue-active');
				}, 500);
			} else if (givenSeq[i] === YELLOW) {
				$('.yellow').addClass('yellow-active');
				setTimeout(function() {
					$('.yellow').removeClass('yellow-active');
				}, 500);
			}  
			i++;
		}
	}, 1000);
}