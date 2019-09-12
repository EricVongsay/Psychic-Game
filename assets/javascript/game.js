// Create array for letters to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// create for loop to cycle through array 


// randomize choice
var computerChoice = letters[Math.floor(Math.random()*letters.length)];
console.log(computerChoice);


var guesses=[];
var wins=0;
var losses=0;
var chances=9;

var winText= document.getElementById("wins");
var lossesText=document.getElementById("losses");
var chancesText=document.getElementById("guesses");
var guessText=document.getElementById("yourGuess");


// get user guess through onkey
document.onkeyup= function(event){


    var userGuess=event.key;
 

    guesses.push(userGuess);
    
    // create if statement to increase score
    if(event){
    if (userGuess === computerChoice){
        wins++;
        alert("You Win! The correct letter is: "+computerChoice);
       
    }else{
        chances--;
        
    };
    winText.textContent= "Wins: "+wins;
    lossesText.textContent="Losses: "+losses;
    chancesText.textContent="Guesses Left: "+chances;
    guessText.textContent = "Your guesses: "+guesses;


    if(chances===0){
        losses++;
        chances=9;
        function clearArray(guesses) {
            while (guesses.length) {
              guesses.pop();
            }
          }
        guessText.textContent = "Your guesses: "+guesses;
    }
    }



};



