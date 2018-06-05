var wins = 0;
    var losses = 0;
    var guessesRemaining = 9;
    var guessesUsed = [];
	var appChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	document.onkeyup = function(event) {
		var personGuess = String.fromCharCode(event.keyCode).toLowerCase();
		var appGuess = appChoices[Math.floor(Math.random()*appChoices.length)];
		guessesUsed.push(personGuess);
		if (personGuess == appGuess) {
			wins++;
			alert("You Got it! Good job.");
			guessesRemaining = 9;
			guessesUsed.length = 0;
		}
		else if (guessesRemaining == 0) {
			losses++;
			alert("OH! Too bad. You lost. Try again?");
			guessesUsed.length = 0;
			guessesRemaining = 9;
		}
		else if (personGuess !== appGuess) {
			guessesRemaining--;
		}
		var html = "<h1>Psychic Game</h1>" + 
        "<p>Guess the Magic Letter!</p>" +
        "<p>Wins: " + 
        wins + 
        "</p>" +
        "<p>Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Remaining: " + 
        guessesRemaining + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesUsed +
        "</p>"
        ;
		document.querySelector("#psychic-game").innerHTML = html;
	}