// Create array for letters to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// create for loop to cycle through array 
for(var i =0;i<letters.length;i++){

}
// randomize choice
var computerChoice = letters[Math.floor(Math.random()*letters.length)];
// get user guess through onkey
var userGuess=event.key;

// create variables for score