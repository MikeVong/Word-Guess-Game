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
var guessWord = [];
var matchWord;
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
    

// ========================================================
//                Game Functions

// Check if letter is in word & process
function checkForLetter(letter) 
    {
    var foundLetter = false;
    // Search string for letter
    for (var i=0, j= matchWord.length; i<j; i++) 
        {
        if (letter === matchWord[i]) 
            {
            guessWord[i] = letter;
            foundLetter = true;
                // If guessing word matches random word
                if (guessWord.join("") === matchWord) 
                    {
                    // adding 1 of wins
                    wins++;
                    pauseGame = true;
                    setTimeout(resetGame,3000);
                    }
                
            }
        }
        console.log(letter);
        if (!foundLetter) 
            {
            // Check if inccorrect guess is already on the list
            if (!guessedLetters.includes(letter)) 
                {
                // Add incorrect letter to guessed letter list
                guessedLetters.push(letter);
                // Decrement the number of remaining guesses
                numGuess--;
                }
                //what if all guess gone
            if (numGuess === 0)
                {
                // Display word before reseting game
                guessWord = matchWord.split();
                pauseGame = true;
                // adding to lost
                losses++;
                // Reset game after 5 sec.
                setTimeout(resetGame, 5000);
                }
            }
       
    
    // update the html after the code runs.
    updateDisplay();
    }


// Resetting the game function
function resetGame() 
    {
    numGuess = maxGuess;
    pauseGame = false;
    

    // Get a random song from the array
    matchWord = possibleSongs[Math.floor(Math.random() * possibleSongs.length)].toUpperCase();
    console.log(matchWord);

        // Reset word arrays
        guessedLetters = [];
        guessWord = [];

        // Reset the guessed word
        for (var i=0, j=matchWord.length; i < j; i++)
          {
            // Put a space instead of an underscore between multi words
            if (matchWord[i] === " ") 
              {
                guessWord.push(" ");
              }
             else 
              {
                guessWord.push("_");
              }
          }

        // update the html after the code runs.
        updateDisplay()
    }

function updateDisplay () 
    {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;
    document.getElementById("currentWord").innerText = guessWord.join("");
    document.getElementById("remainingGuesses").innerText = numGuess;
    document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ");
    }