var wins = 0;
var losses = 0;
var left = 9;
var guesses = 0;

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

var computerLetter;

var pickLetter = function() {
    computerLetter = alpha[Math.floor(Math.random() * alpha.length)];
};

