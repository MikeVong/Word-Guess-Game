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

// Wait for key press
document.onkeyup = function(event) 
    {
    // Make sure key pressed is an alphabet character
    if (isAlpha(event.key))
        {
        checkForLetter(event.key.toUpperCase());
        }
    }
// Check in keypressed is between A-Z or a-z
function isAlpha (check)
    {
    return typeof check === "string" && 
            check.length === 1 && 
            (check >= "a" && check <= "z" || 
             check >= "A" && check <= "Z");
    }
    console.log(event.key);

function updateDisplay () 
    {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;
    document.getElementById("currentWord").innerText = guessingWord.join("");
    document.getElementById("remainingGuesses").innerText = numGuess;
    document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
    }