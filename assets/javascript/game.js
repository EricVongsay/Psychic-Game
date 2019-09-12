// Create array for letters to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// create for loop to cycle through array 
for(var i =0;i<letters.length;i++){

}


// randomize choice
var computerChoice = letters[Math.floor(Math.random()*letters.length)];
console.log(computerChoice);


// get user guess through onkey
document.onkeyup= function(event){


    var userGuess=event.key;
    

    // create variables for score
    var wins=0;
    var losses=0;
    var chances=9;

    var winText= document.getElementById("wins");
    var lossesText=document.getElementById("losses");
    var chancesText=document.getElementById("guesses");
    var guessText=document.getElementById("yourGuess");

    // create if statement to increase score
    if (userGuess === computerChoice){
        wins++;
    }else{
        losses++;
        guesses--;
    };

    //creating array for guesses
    var guesses=[];
    var newDiv=document.createElement("div");
    guessText.appendChild(newDiv);
    guesses.push(userGuess);

};



