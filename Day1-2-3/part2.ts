import * as fs from 'fs';

let input=fs.readFileSync('./input.txt','utf8');

let multipliersinput=input.match(/mul\(\d{1,3},\d{1,3}\)|do(?:n't)?\(\)/g)
const mapToInt = (list: string[]) => list.map((n) => parseInt(n));
export const product = (list: number[]) => {
    if (list.length === 0) return NaN;
    return list.reduce((sum, num) => sum * num);
};
let multiplier =/[0-9]{1,3}/g
console.log(multipliersinput)

if (!multipliersinput)
    throw new Error('invalid data')


const {result}  = multipliersinput.reduce(
    (acc, multiplier) => {
        if (multiplier === "don't()") {
            return { isEnabled: false, result: acc.result };
        }
        if (multiplier === 'do()') {
            return { isEnabled: true, result: acc.result };
        }

        if (!acc.isEnabled) {
            return acc;
        }
        else {
            const factors = mapToInt(multiplier.slice(4, -1).split(','));
            console.log(factors)
            return {
                isEnabled: acc.isEnabled,
                result: acc.result + product(factors),
            };
        }
    },
    { isEnabled: true, result: 0 },
);

console.log(result);





