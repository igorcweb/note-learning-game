/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	var note = "",
	    imgSrc = "",
	    reg = 0,
	    noteNumber = 0,
	    notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
	    trebleButton = $('.treble'),
	    bassButton = $('.bass'),
	    bothButton = $('.both'),
	    easyButton = $('#easy'),
	    mediumButton = $('#medium'),
	    hardButton = $('#hard'),
	    noteButton = $('.note-button > .button__task'),
	    regButton = $('.reg-button > .button__task'),
	    winTrack = "",
	    score = 0,
	    scoreDisplay = $('h1 span#score'),
	    noteTrack = [],
	    maxNotes = 0,
	    counter = 0,
	    hamburger = $('.hamburger'),
	    cross = $('.cross'),
	    year = $('footer p span.year');

	generateTreble();

	function generateTreble() {
		noteButton.show().css({ 'color': 'inherit', 'background-color': '#B4BFBF' });
		regButton.show().css({ 'color': 'inherit', 'background-color': '#B4BFBF' });
		$('.task1').text('Pick a Note:');
		$('.task2').text('Pick a Register:');
		$('.task3').text('or Pick a Key:');
		$('.task4').text('or a Key:');
		$('div.button__task').css('opacity', '1');
		winTrack = "";
		if ($('.level').children().hasClass('easy')) {
			easyTreble();maxNotes = 11;
		} else if ($('.level').children().hasClass('medium')) {
			mediumTreble();maxNotes = 17;
		} else {
			hardTreble();maxNotes = 32;
		}
		note = notes[noteNumber];
		note += reg;
		//prevent repeating notes until all have been used
		if (counter === maxNotes || counter >= 32) {
			counter = 0;
			noteTrack = [];
		}
		//----------------------------------
		if (noteTrack.indexOf(note) >= 0) {
			generateTreble();
		} else {
			counter++;
			imgSrc = "assets/images/" + note + ".jpg";
			$('.notes').attr('src', imgSrc);
			noteTrack.push(note);
		}
	}

	function generateBass() {
		noteButton.show().css({ 'color': 'inherit', 'background-color': '#B4BFBF' });
		regButton.show().css({ 'color': 'inherit', 'background-color': '#B4BFBF' });
		$('.task1').text('Pick a Note:');
		$('.task2').text('Pick a Register:');
		$('.task3').text('or Pick a Key:');
		$('.task4').text('or a Key:');
		$('div.button__task').css('opacity', '1');
		winTrack = "";
		if ($('.level').children().hasClass('easy')) {
			easyBass();maxNotes = 11;
		} else if ($('.level').children().hasClass('medium')) {
			mediumBass();maxNotes = 17;
		} else {
			hardBass();maxNotes = 26;
		}
		note = notes[noteNumber];
		note += reg;
		//prevent repeating notes until all have been used
		if (counter === maxNotes || counter >= 26) {
			counter = 0;
			noteTrack = [];
		}
		//-----------------------------------
		if (noteTrack.indexOf(note) >= 0) {
			generateBass();
		} else {
			counter++;
			imgSrc = "assets/images/" + "b" + note + ".jpg";
			$('.notes').attr('src', imgSrc);
			noteTrack.push(note);
		}
	}

	function generateBoth() {
		var bothClefs = [generateTreble, generateBass];
		var i = getRandomInt(0, 1);
		bothClefs[i]();
	}

	function easyTreble() {
		reg = getRandomInt(4, 5);
		if (reg === 4) {
			noteNumber = getRandomInt(1, 6);
		} else {
			noteNumber = getRandomInt(0, 4);
		}
	}

	function mediumTreble() {
		reg = getRandomInt(3, 6);
		if (reg === 3) {
			noteNumber = getRandomInt(5, 6);
		} else if (reg === 6) {
			noteNumber = 0;
		} else {
			noteNumber = getRandomInt(0, 6);
		}
	}

	function hardTreble() {
		reg = getRandomInt(3, 7);
		noteNumber = getRandomInt(0, 6);
		if (reg === 3) {
			noteNumber = getRandomInt(3, 6);
		}
	}

	function easyBass() {
		reg = getRandomInt(2, 3);
		if (reg === 2) {
			noteNumber = getRandomInt(3, 6);
		} else {
			noteNumber = getRandomInt(0, 6);
		}
	}

	function mediumBass() {
		reg = getRandomInt(2, 4);
		if (reg < 4) {
			noteNumber = getRandomInt(0, 6);
		} else {
			noteNumber = getRandomInt(0, 2);
		}
	}

	function hardBass() {
		reg = getRandomInt(1, 4);
		noteNumber = getRandomInt(0, 6);
		if (reg === 4) {
			noteNumber = getRandomInt(0, 4);
		}
	}

	$('.clef').on('click', trebleButton, function () {
		winTrack = "";
		$('div.button__task').css('opacity', '1');
		generateTreble();
		$(this).children().removeClass('selected hard medium highlight').addClass('easy');
		trebleButton.addClass('selected highlight');
	});

	bassButton.on('click', function () {
		winTrack = "";
		$('div.button__task').css('opacity', '1');
		generateBass();
		$('.clef').children().removeClass('selected hard medium highlight').addClass('easy');
		$(this).addClass('selected highlight');
	});

	bothButton.on('click', function () {
		winTrack = "";
		$('div.button__task').css('opacity', '1');
		generateBoth();
		$('.clef').children().removeClass('selected hard medium highlight').addClass('easy');
		$(this).addClass('selected highlight');
	});

	easyButton.on('click', function () {
		$('.level').children().removeClass('hard medium highlight').addClass('easy');
		$(this).addClass('highlight');
		if (trebleButton.hasClass('selected')) {
			generateTreble();
		} else if (bassButton.hasClass('selected')) {
			generateBass();
		} else {
			generateBoth();
		}
	});

	mediumButton.on('click', function () {
		$('.level').children().removeClass('easy hard highlight').addClass('medium');
		$(this).addClass('highlight');
		if (trebleButton.hasClass('selected')) {
			generateTreble();
		} else if (bassButton.hasClass('selected')) {
			generateBass();
		} else {
			generateBoth();
		}
	});
	hardButton.on('click', function () {
		$('.level').children().removeClass('easy medium highlight').addClass('hard');
		$(this).addClass('highlight');
		if (trebleButton.hasClass('selected')) {
			generateTreble();
		} else if (bassButton.hasClass('selected')) {
			generateBass();
		} else {
			generateBoth();
		}
	});

	function win() {
		if ((winTrack.indexOf('nr') >= 0 || winTrack.indexOf('rn') >= 0) && trebleButton.hasClass('selected')) {
			score += 1;scoreDisplay.text(" " + score);
			setTimeout(generateTreble, 2000);
		} else if ((winTrack.indexOf('nr') >= 0 || winTrack.indexOf('rn') >= 0) && bassButton.hasClass('selected')) {
			score += 1;scoreDisplay.text(" " + score);
			setTimeout(generateBass, 2000);
		} else if ((winTrack.indexOf('nr') >= 0 || winTrack.indexOf('rn') >= 0) && bothButton.hasClass('selected')) {
			score += 1;scoreDisplay.text(" " + score);
			setTimeout(generateBoth, 2000);
		}
	}

	noteButton.on('click', function () {
		if ($(this).context.innerText === note[0]) {
			$(this).css({ 'color': '#fafafa', 'background-color': 'steelblue' });
			$(this).siblings().hide();
			winTrack += "n";
			$('.task1').text('Correct!');
			win();
		} else {
			score = 0;
			// $('.task1').text('Try Again!').css('color', '#e9ebee');
			// 		setTimeout(function() {
			// 		$('.task1').css('color', '#333');
			// 		}, 200);
			scoreDisplay.text(" " + score);
			$(this).css('opacity', '0');
		}
	});

	regButton.on('click', function () {
		if ($(this).context.innerText === note[1]) {
			$(this).css({ 'color': '#fafafa', 'background-color': 'steelblue' });
			$(this).siblings().hide();
			winTrack += "r";
			$('.task2').text('Correct!');
			win();
		} else {
			score = 0;
			// $('.task2').text('Try Again!').css('color', '#e9ebee');
			// 		setTimeout(function() {
			// 		$('.task2').css('color', '#333');
			// 		}, 200);
			scoreDisplay.text(" " + score);
			$(this).css('opacity', '0');
		}
	});

	hamburger.on('click', function () {
		$(this).hide();
		cross.show();
		$('.button__mode').css('visibility', 'visible');
		$('.button__info').css('visibility', 'visible');
	});

	cross.on('click', function () {
		$(this).hide();
		hamburger.show();
		$('.button__mode').css('visibility', 'hidden');
		$('.button__info').css('visibility', 'hidden');
	});

	$('.one-octave > img').each(function () {
		$(this).on('click', function () {
			if ($(this).attr('alt') === note[0]) {
				noteButton.each(function () {
					if ($(this).context.innerText === note[0]) {
						$(this).css({ 'color': '#fafafa', 'background-color': 'steelblue' });
						$(this).siblings().css('opacity', '0').hide();
						winTrack += "n";
						$('.task1').text('Correct!');
						$('.task4').text('Correct!');
						win();
					}
				});
			} else {
				$('.task4').text('');
				setTimeout(function () {
					$('.task4').text('Try Again!');
				}, 200);
				score = 0;
				scoreDisplay.text(" " + score);
			}
		});
	});

	$('.keyboard-keys > img').each(function () {
		$(this).on('click', function () {
			if ($(this).attr('alt') === note) {
				$('.task3').text('Correct!');
				buttonWin();
				win();
			} else {
				$('.task3').text('');
				setTimeout(function () {
					$('.task3').text('Try Again!');
				}, 200);

				score = 0;
				scoreDisplay.text(" " + score);
			}

			function buttonWin() {
				$('.note-button > .button').each(function () {
					if ($(this).context.innerText === note[0]) {
						$(this).css({ 'color': '#fafafa', 'background-color': 'steelblue' });
						$(this).siblings().css('opacity', '0').hide();
						winTrack += "n";
						$('.task1').text('Correct!');
					}
				});

				$('.reg-button > .button').each(function () {
					if ($(this).context.innerText === note[1]) {
						$(this).css({ 'color': '#fafafa', 'background-color': 'steelblue' });
						$(this).siblings().css('opacity', '0').hide();
						winTrack += "r";
						$('.task2').text('Correct!');
					}
				});
			}
		});
	});

	//Footer Year
	year.text(new Date().getFullYear());

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

/***/ })
/******/ ]);