const alphabet = {"a":1, "b":3, "c":5, "d":2, "e":1, "f":4, "g":3, "h":4, "i":1, "j":4, "k":3, "l":3, "m":3, "n":1, "o":1, "p":3, "q":10, "r":2, "s":2, "t":2, "u":4, "v":4, "w":5, "x":8, "y":8, "z":4}
scores = alphabet;
let button = document.getElementById("button");
let scoreOutput = document.getElementById("word_score_output");
let sum = 0;

button.onclick = function() {
    let word = document.getElementById("userInput").value;
    word = word.toLowerCase();
    for (var i = 0; i < word.length; ++i) {
        sum += scores[word.charAt(i)] || 0;
    }
    scoreOutput.innerHTML = ("Word score is " + sum);
    sum = 0;
};