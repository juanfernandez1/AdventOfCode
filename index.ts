import * as fs from 'fs';

let input=fs.readFileSync('./input.txt','utf8');

let filteredinput = /mul\([0-9]{1,3},[0-9]{1,3}\)/g
let arrayofmultiply=[0]
let multipliersinput=input.match(filteredinput)
let result = 0;
let multiplier =/[0-9]{1,3}/g
console.log(multipliersinput)

if (multipliersinput) {
    let iterations=multipliersinput.length
    var numbers = []

    for (let i=0; i<iterations; i++) {
        numbers[i] = multipliersinput[i].match(multiplier)

    }
    if (numbers){
        console.log(numbers)
        for (let i=0; (i)<(numbers.length); i++) {
            var aux = numbers.slice(i,i+1)
            console.log(aux)
                if (aux!){
                    var auxiliar=(aux.toString()).split(",",2)
                    result = result + Number(auxiliar[0])* Number(auxiliar[1])

            }

        }
        console.log(result)


    }

}





