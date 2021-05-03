const alphabet = {"a":1, "b":3, "c":5, "d":2, "e":1, "f":4, "g":3, "h":4, "i":1, "j":4, "k":3, "l":3, "m":3, "n":1, "o":1, "p":3, "q":10, "r":2, "s":2, "t":2, "u":4, "v":4, "w":5, "x":8, "y":8, "z":4}
let button = document.getElementById("button");

scores = alphabet;

let word = document.getElementById("userInput").value;
word = word.toLowerCase();

let sum = 0;
for (var i = 0; i < word.length; ++i) {
    sum += scores[word.charAt(i)] || 0;
}

button.onclick = function() {
    alert(sum);
};
