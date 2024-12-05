import * as fs from "fs";
let cross : string=""
let input=fs.readFileSync('./input.txt','utf8');
let j=0;
let parsedInput:string[][]=[]
let intermediateInput :string[]=[]
for (let i=0; i<(input.length);i++){
    if (input[i]!=="\r" && input[i]!=="\n" && input[i]!==""){
        intermediateInput.push(input[i])
    }
    if (input[i]=="\n"){
        j++
        parsedInput.push(intermediateInput)
        intermediateInput=[]
    }
}
let count = 0;

for (let row=1; row<(parsedInput.length-1);row++) {
    for (let col = 1; col<(parsedInput[row].length-1); col++) {
        if (parsedInput[row][col] == "A") {
            if (parsedInput[row-1][col-1] === "M" && parsedInput[row+1][col-1]==="M") {
                cross = "both_right"
                if (parsedInput[row+1][col+1]==="S" && parsedInput[row-1][col+1]==="S" ){
                    count++
                    console.log (`found a ${cross} at ${row} ${col}`)
                }
            }
            if (parsedInput[row-1][col-1] === "M" && parsedInput[row+1][col-1]==="S") {
                cross = "top_right_bottom_swapped"
                if (parsedInput[row+1][col+1]==="S" && parsedInput[row-1][col+1]==="M" ){
                    count++
                    console.log (`found a ${cross} at ${row} ${col}`)
                }
            }
            if (parsedInput[row-1][col-1] === "S" && parsedInput[row+1][col-1]==="M") {
                cross = "top_swapped_bottom_right"
                if (parsedInput[row+1][col+1]==="M" && parsedInput[row-1][col+1]==="S" ){
                    count++
                    console.log (`found a ${cross} at ${row} ${col}`)
                }
            }
            if (parsedInput[row-1][col-1] === "S" && parsedInput[row+1][col-1]==="S") {
                cross = "both_swapped"
                if (parsedInput[row+1][col+1]==="M" && parsedInput[row-1][col+1]==="M" ){
                    count++
                    console.log (`found a ${cross} at ${row} ${col}`)
                }
            }

                }


    }
}
console.log(parsedInput)
console.log(parsedInput[0].length)
console.log(parsedInput.length)
console.log(parsedInput[parsedInput.length-1][parsedInput[0].length-1])
console.log(count)
