const RED = 0;
const GREEN = 1;
const BLUE = 2;
const YELLOW = 3;

var givenSeq = [];
var playerSeq = [];

$(document).ready(function() {
	var step = 4;

	$('.start').click(function(event) {
		//step++;
		$('.counter').text(step);
		padHighlightAndSound(step);
	});
});

function padHighlightAndSound(step) {
	var i = 0;
	var sequenceInterval = setInterval(function() {
		if (i === step) {
			clearInterval(sequenceInterval);
		} else {
			var randomNum = Math.floor(Math.random()*4);
			givenSeq.push(randomNum);
			if (givenSeq[givenSeq.length-1] === RED) {
				$('.pad-red').addClass('red-active');
				setTimeout(function() {
					$('.pad-red').removeClass('red-active');
				}, 500);
			} else if (givenSeq[givenSeq.length-1] === GREEN) {
				$('.pad-green').addClass('green-active');
				setTimeout(function() {
					$('.pad-green').removeClass('green-active');
				}, 500);
			} else if (givenSeq[givenSeq.length-1] === BLUE) {
				$('.pad-blue').addClass('blue-active');
				setTimeout(function() {
					$('.pad-blue').removeClass('blue-active');
				}, 500);
			} else if (givenSeq[givenSeq.length-1] === YELLOW) {
				$('.pad-yellow').addClass('yellow-active');
				setTimeout(function() {
					$('.pad-yellow').removeClass('yellow-active');
				}, 500);
			}  
			i++;
		}
	}, 1000);
}