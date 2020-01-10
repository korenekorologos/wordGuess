function letter(value) {  //begin with "letter" function 
    this.letter = value;
    this.guessed = false;

    this.toSTring = function () { //string to determine the space & blanks
        if (this.letter === " ") {
            this.guessed = true; //determine guessed t/f
            return " ";
        } else {
            if (this.guessed === false) { //determines blank, underlined 
                return "_";
            } else {
                return this.letter;
            }
        }
    };
    this.guess = function (guess) {
        if (guess === this.letter) {
            this.guess = true;
        }
    };
}
module.exports = letter; //export the file 

