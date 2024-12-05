import * as fs from "fs";
let direction : string=""
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

for (let row=0; row<(parsedInput.length);row++) {
    for (let col = 0; col<(parsedInput[row].length); col++) {
        if (parsedInput[row][col] == "X") {
            if (row > 2) {
                if (parsedInput[row-1][col] === "M") {
                    direction = "north"
                    if (parsedInput[row-2][col]==="A" && parsedInput[row-3][col]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }

                }
            }
            if (col < (parsedInput[row].length-2)) {
                if (parsedInput[row][col + 1] === "M") {
                    direction = "east"
                    if (parsedInput[row][col+2]==="A" && parsedInput[row][col+3]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }
                }
            }
            if (col > 2) {
                if (parsedInput[row][col-1] === "M") {
                    direction = "west"
                    if (parsedInput[row][col-2]==="A" && parsedInput[row][col-3]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }
                }
            }
            if (row < (parsedInput.length-3)) {
                if (parsedInput[row + 1][col] === "M") {
                    direction = "south"
                    if (parsedInput[row+2][col]==="A" && parsedInput[row+3][col]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }
                }
            }
            if (row > 2 && col < (parsedInput[row].length-2)) {
                if (parsedInput[row-1][col+1] === "M") {
                    direction = "north-east"
                    if (parsedInput[row-2][col+2]==="A" && parsedInput[row-3][col+3]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }
                }
            }
            if (row > 2 && col > 2) {
                if (parsedInput[row-1][col-1] === "M") {
                    direction = "north-west"
                    if (parsedInput[row-2][col-2]==="A" && parsedInput[row-3][col-3]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }
                }
            }
            if (row < (parsedInput.length-3) && col < (parsedInput[row].length-2)) {
                if (parsedInput[row+1][col+1] === "M") {
                    direction = "south-east"
                    if (parsedInput[row+2][col+2]==="A" && parsedInput[row+3][col+3]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }
                }
            }
            if (row < (parsedInput.length-2) && col > 2) {
                if (parsedInput[row+1][col-1] === "M") {
                    direction = "south-west"
                    if (parsedInput[row+2][col-2]==="A" && parsedInput[row+3][col-3]==="S"){
                        count++
                        console.log(`XMAS found on ${direction}`)
                        console.log(`Row ${row} and col ${col}` )
                    }
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
