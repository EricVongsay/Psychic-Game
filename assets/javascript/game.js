/* 

1.  Set Gloal variables:

 -  link stylesheets, do bootstrap, etc.

 -  setting classes and id's for spaces we need to write into

 -  array for possible words
 -  place for word chosen to be (what the word is during each game loop)
 -  array for underscores 
 -  blank array for user choices (event.keys)


 -  create function for onkeyup to get user guesses
 -  create function for getting "computer chosen word"
 -  create function with (if statement) 
 -  create function/code for resetting (hard clearing the variables that get set)

\
*/

var wordChoices = ["carwash", "bus"];
var chosenWord;
var underScoreArray = [];
var lettersGuessed = [];

function hiddenWord() {

    chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(chosenWord);

    var hangmanArray = []; //new Array(chosenWord.length);

    for (var i = 0; i < chosenWord.length; i++) {
        hangmanArray[i] = "_";

    }
    console.log(hangmanArray);
}

hiddenWord();

document.onkeyup = function (event) {
    var userguess = event.key;

    // all of this is qualifying that user input is valid for the game
    if (userguess.length !== 1) {
        alert("You must choose only 1 letter...");
        //makes sure only 1 key was pressed (Holding two keys down wont work)
    } else if (!userguess.match(/^[a-z]+$/i)) {  // checking for alphabet letter
        alert("You must choose a letter...");
        //makes sure each pick is a unique value
    } else if (lettersGuessed.indexOf(userguess) !== -1) { // looks up lettersguessed array, if it is not in the lettersGuessed array, it allows it
        alert("You must pick a letter that you haven't picked yet...");
    } else {
        var letterinword = false;
        var j = 0;
        realGame();
        console.log(realGame());
    }
    
}


//String.replace

// String.includes("xyz") - returns true or false
// string.includes("xyz", "abc") - replaces xyz with abc 

// since array doesn't use the .include, you can turn the array into string, then use include

// array.join(xyz) 
// array.join(xyz, abc) 

// then do 

// String.includes("xyz") - returns true or false
// string.includes("xyz", "abc") - replaces xyz with abc 










/*

// Create array for letters to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// create for loop to cycle through array
var computerChoice = letters[Math.floor(Math.random()*letters.length)];
var computerChoice1 = letters[Math.floor(Math.random()*letters.length)];
var computerChoice2 = letters[Math.floor(Math.random()*letters.length)];
console.log(computerChoice);





var guesses=[];
var wins=0;
var losses=0;
var chances=9;

var winText= document.getElementById("wins");
var lossesText=document.getElementById("losses");
var chancesText=document.getElementById("guesses");
var guessText=document.getElementById("yourGuess");

//tools
function reset(){
    document.location.href("");

}

function resetVariable(){
    guesses=[];
    computerChoice = letters[Math.floor(Math.random()*letters.length)];
}




// get user guess through onkey
document.onkeyup= function(event){


    var userGuess=event.key;


    guesses.push(userGuess);

    // create if statement to increase score
    if(event){ // may not be necessary to do this


    if (userGuess === computerChoice){
        wins++;
        alert("You Win! The correct letter is: "+computerChoice);
        computerChoice=computerChoice1;
        chances=9;
        resetVariable();


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
        computerChoice=computerChoice2;
        guessText.textContent = "Your guesses: "+guesses;
        // reset();
        resetVariable();
    }
    }



};
*/


