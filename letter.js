function Letter(value) {  //begin with "letter" function 
    this.Letter = value;
    this.guessed = false;

    this.toString = function () { //string to determine the space & blanks
        if (this.Letter === " ") {
            this.guessed = true; //determine guessed t/f
            return " ";
        } else {
            if (this.guessed === false) { //determines blank, underlined 
                return "_";
            } else {
                return this.Letter;
            }
        }
    };
    this.guess = function (guess) {
        if (guess === this.Letter) {
            this.guess = true;
        }
    };
}
module.exports = Letter; //export the file 

