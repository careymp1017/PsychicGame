var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var compLetter;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// tells the browser to pick a letter from from alphabet[]
function compGuess() {
    compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
compGuess();
console.log(compLetter);

// sets a function to start a new game
function newGame() {
    console.clear();
    compGuess();
    console.log(compLetter);
    guessesMade = [];
    guessesLeft = 9;
    }

document.onkeyup = function(event) {

    // identifies the key pressed and assigns it to a variable
    var userGuess = event.key;
    console.log(userGuess); 
    
    // reduces the numebr of guesses left
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    console.log(guessesLeft); 

    // tracks each guess by user
    guessesMade.push(userGuess);
    console.log(guessesMade); 

    // writes the user guesses to the HTML page
    function trackGuesses() {
        var writeGuesses = guessesMade.toString();
        document.getElementById("guessesMade").innerHTML = writeGuesses;
    }
    trackGuesses();

    if (guessesLeft > 0) {
        if (userGuess == compLetter) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            newGame();
        }
    }
        else if ( guessesLeft == 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            newGame();
        }
}