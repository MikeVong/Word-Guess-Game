// Song list
var possibleSongs = ["billie jean", 
                    "take on me", 
                    "every breath you take", 
                    "all night long",
                    "careless whisper",
                    "Beat it",
                    "time after time",
                    "in the air tonight",
                    "take my breath away"];
// pre-set variables
const maxGuess = 10;
var pauseGame = false;
var guessedLetters = [];
var guessingWord = [];
var wordToMatch;
var numGuess;
var wins = 0;
var losses = 0;

resetGame();



function updateDisplay () 
    {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;
    document.getElementById("currentWord").innerText = guessingWord.join("");
    document.getElementById("remainingGuesses").innerText = numGuess;
    document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
    }