

// Initialize the variables, because if you don't, bad things happen
// Wurds
var characters = ["Sylvanas", "Illidan", "Jaina Pourdmoore", "Sargeras", "Thrall", "Guldan", "Maiev", "Medivh"];
// Wrong wurds
var wrong = [];
var guesses = 7;
// Git a wurd
var randomWord = characters[Math.floor(Math.random() * characters.length)];
// Make a wurd uther stuff
var res = randomWord.split ("");
// Dis got nothin' boss
var progress = [];

// Work work
for (var i = 0; i < res.length; i++){
    progress [i] = "_ ";
}
var word = progress.join("");

// Put the thing in the thing
document.getElementById("guess-space").innerHTML = word;

// Good job man
function win() {
    var playAgain = confirm ("For the horde!?");
    if (playAgain) {
        location.reload();
    } // Or not good job, bye
    else {
        document.write ("For the mamlimance");
    }
}

// Bad job man
function lose() {
    var playAgain = confirm ("You are dead.");
    if (playAgain) {
        location.reload();
    }
    else {
        document.write ("Thanks for playing");
    }
}

// on key up do dis ting
document.onkeyup = function (event) {
    
    // I put the user's guess in here boss
    var userInput = event.key;
    var correct = false; // so far

    // Did you get one or nah
    for (var i = 0; i < res.length; i++) {
        if (userInput === res[i]){
            if (progress [i] === "_ "){
                progress [i] = userInput;
                correct = true;
            }
        }
    }
 
    //join progress array into one string
    var word = progress.join('');

    //display string in the word-blanks div
    document.getElementById("guess-space").innerHTML = word

    // if wrong, rub it in their face
    if (!correct) {
        wrong.push (userInput);
        document.getElementById("wrong-guess").innerHTML = wrong;
        // Iterate upon guesses if wrong, eh
        guesses --;
        document.getElementById("guesses-left").innerHTML = guesses;
        
    }

    // Oh shoot they won, do this stuff
    if (word.indexOf ("_ ") === -1) {
        setTimeout(win, 200);      
    }
    
    // Oh no you're out of guesses
    if (guesses < 1) {
        setTimeout(lose, 200);
    }

    
}



