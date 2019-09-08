var wins = 0;
var losses = 0;
var left = 9;
var guesses = [];
var getLetter;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

var compLetter = function () {
    getLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
compLetter()
console.log(getLetter);


