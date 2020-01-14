//sets up the file connections 
var Word = require("./word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

//array of yoga asana's
var yoga = [
    "child",
    "formidable",
    "twist",
    "frog",
    "cobra",
    "cat",
    "staff",
    "bow",
    "eagle",
    "plough",
    "pigeon",
    "heron",
    "cockerel",
    "tortoise",
    "pendant",
    "crocodile",
    "garland",
    "fish",
    "boat",
    "peacock",
    "lotus",
    "gate",
    "noose",
    "corpse",
    "lion",
    "mountain",
    "firefly",
    "triangle",
    "camel",
    "thunderbolt",
    "warrior",
    "tree",
    "scorpion"

];

//random loop
var randomIndex = Math.floor(Math.random() * yoga.length);
var randomWord = yoga[randomIndex];

//makes a random word 
var computerWord = new Word(randomWord);

var requireNewWord = false;
var incorrectletters = [];
var correctletters = [];

//set guesses to 10 
var guessesleft = 10;

//set a function that handles all the logic 
function theLogic() {

    if (requireNewWord) {
        var randomIndex = Math.floor(Math.random() * yoga.length);
        var randomWord = yoga[randomIndex];

        computerWord = new Word(randomWord);

        requireNewWord = false;
    }
    //array that holds the word that is complete
    var wordComplete = [];

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Pick a letter, from a-z",
                name: "userinput"
            }
        ])
            .then(function (input) {
                if (
                    !letterArray.includes(input.userinput) ||
                    input.userinput.length > 1
                ) {
                    console.log("Nice try, try again!\n");
                    theLogic();
                } else {
                    if (
                        incorrectletters.includes(input.userinput) ||
                        correctletters.includes(input.userinput) ||
                        input.userinput === ""
                    ) {
                        console.log("\nYou already guessed it or nothings been entered yet\n");
                        theLogic();
                    } else {
                        var wordCheckArray = [];
                        computerWord.userGuess(input.userinput);

                        computerWord.objArray.forEach(wordCheck);
                        if (wordCheckArray.join("") === wordComplete.join("")) {
                            console.log("\nOooops, that's incorrect\n");

                            incorrectletters.push(input.userinput);
                            guessesleft--;
                        } else {
                            console.log("\nAwesome, that's correct!\n"); 
                            correctletters.push(input.userinput); 
                        }

                        computerWord.log();

                        //shows the guesses left 
                        console.log("Guess Left: " + guessesleft + "\n"); 

                        //shows the letters that've been guessed already 
                        console.log("Letters Guessed: " + incorrectletters.join (" ") + "\n"); 
                    
                    
                    }


                }




            })

    } else {
        console.log("WINNER!!");
    }

}


