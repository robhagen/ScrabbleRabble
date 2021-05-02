let button = document.getElementById("button");
let userEnteredWord = ["Entered word is empty"];
let enteredWordSeparated = ["Word Separated is empty"];

fetch('https://robhagen.github.io/ScrabbleRabble/alphabet.json')
    .then(alphabetData => alphabetData.json())
    .then(data => alphabetData = (data));

button.onclick = function() {
    let userInput = document.getElementById("userInput").value;
    userEnteredWord = (userInput);
    enteredWordSeparated = userEnteredWord.split('');
    document.getElementById("word_output").innerHTML = ("Your word is " + enteredWordSeparated);
    for (alphabetData in enteredWordSeparated) {
        console.log(enteredWordSeparated + " " + "zit er in")}
    /*calculateWordScore();*/
};

/*
calculateWordScore = function() {
    for (i = 0; i < enteredWordSeparated.length; i++) {
            if (alphabetData[j].hasOwnProperty(enteredWordSeparated[j])) {
                console.log(j);
        }
      } 
};
*/
