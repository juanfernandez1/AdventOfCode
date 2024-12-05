"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('./example.txt', 'utf8');
var j = 0;
var parsedInput = [];
var intermediateInput = [];
for (var i = 0; i < (input.length); i++) {
    if (input[i] !== "\r" && input[i] !== "\n" && input[i] !== "") {
        intermediateInput.push(input[i]);
    }
    if (input[i] == "\n") {
        j++;
        parsedInput.push(intermediateInput);
        intermediateInput = [];
    }
}
for (var col = 0; col < (parsedInput[col].length); col++) {
    for (var row = 0; parsedInput.length; row++) {
        if (parsedInput[col][row] == "X") {
            console.log("X found");
            console.log(parsedInput[col].length);
        }
    }
}
console.log(parsedInput);
console.log(typeof parsedInput);
console.log(parsedInput[0][5]);
console.log(parsedInput[0][1]);
