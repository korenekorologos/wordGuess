var letter = require("./letter.js"); 

function Word(answer) { //constructer 
    this.objArray = []; 

    for (var i = 0; i < answer.length; i++) {  //for loop that will create a letter variable from our word
        var letter = new letter(answer[i]); // constructer and push the letter to the obj array 
        this.objArray.push(letter); 
    }

    this.log = function() {
        var answerlog = "";
        for(var i = 0; i < this.objArray.length; i++) { //loops through object array
            answerlog += this.objArray[i] + " "; 
        }
        console.log(answerlog + "\n======================\n"); //line break
    }; 

    this.userGuess = function(input) {
        for (var i = 0; i< this.objArray.length; i++) {
            this.objArray[i].guess(input); 
        }
    }; 
}

module.exports = Word; 



