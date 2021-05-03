import alphabet from './alphabet.js';
let button = document.getElementById("button");

scores = alphabet.js

let word = document.getElementById("userInput").value;
word = word.toLowerCase();

let sum = 0;
for (var i = 0; i < word.length; ++i) {
    sum += scores[word.charAt(i)] || 0;
}

button.onclick = function() {
    alert(sum);
};
