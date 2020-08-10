const readline = require("readline-sync");

// Variable tracks if you have key to unlock and exit door.
let foundKey = false;
let options;

// Variable to store your name for the game
const name = readline.question("What is your name? ");
// Game greeting and options to start
console.log("Hello " + name + " Welcome to Escape Room!");
console.log( "Please choose one of the following options: ")

// Game begins.
playGame();



// Function that handles logic to start the game
function playGame() {

    foundKey ? options = [ "Put hand in hole", "Open the door"] :
    options = [ "Put hand in hole", " Find the key", "Open the door"];


   let index = readline.keyInSelect(options, "Choose one");

    if ( index === 0 ) {
        console.log("Sorry, your hand was eaten by a monster. You died!")
        foundKey = false;
        playAgain();
    } else if ( index === 1 && foundKey ) {
        console.log( "Congratulations you have unlocked the door and escaped the escape room!")
        
    } else if ( index === 1 ) {
        console.log("Great, let's look for the key!")
        searchRoom();
        
    }  else if ( index === 2 && foundKey === true ) {
        
        console.log( "Congratulations you have unlocked the door and escaped the escape room!")

    } else {
        console.log( "Sorry, but the door is locked and you need a key.")
        playAgain();
    }
}

// Function that handles logic to 'play again'

function playAgain() {
    let tryAgain = readline.question("Want to try again? Type one ['yes or no'] ");
    tryAgain = tryAgain.toLowerCase();
    if (tryAgain === "yes") {
        playGame();
    } else if ( tryAgain === "no") {
        `<br>`
        console.log("Maybe another time");
    } else {
        console.log( "Sorry I did not understand your response.")
        playAgain();
    }
}


// Fuction that handles the search for the key

function searchRoom() {
    console.log( name + "," + " choose one of the following items to search.");
    let searchItem = [ "Search desk drawer", "Look under the couch", "Peek behind the painting"];
    let searchIndex = readline.keyInSelect(searchItem, "Choose one");
    
    switch (searchIndex) {
        case 0: 
        console.log("Argh, nothing but old coding notes. Keep searching.");
        searchRoom();
        break;
        case 1:
            console.log("OMG, YOU FOUND THE KEY!");
            foundKey = true;
            console.log("Let's get out of here!");
            playGame();
            break;
        case 2:
            console.log("Ugh, yuck, spiders but no key. Keep searching");
            searchRoom();
            break;
        default: 
            console.log( "Sorry, something went wrong.");
            break;
    }

}













