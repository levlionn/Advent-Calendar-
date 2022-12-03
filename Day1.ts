import * as fs from 'fs';
import { createSecureContext } from 'tls';
const elfCalories: string = './input.txt';

let fileContent:string = fs.readFileSync(elfCalories, 'utf-8');

/*Testing function to see if the string has whitespaes*/
//Mainly doing this just to practice some JS methods I didn't previously know about.
function containsWhitespace(str:string) {
    return /\s/.test(str);
}
// let hasWhiteSpace = containsWhitespace(fileContent);
/*End of Test*/

/* Store content into variable and remove all newline characters – putting it into one line.  */
let result = fileContent.split(/\r?\n/).toString();

/* Split previous string into an array that strings, grouped by ',' */
let groupedString = result.split(/,,/);

/*Take a string input, split into an array of numbers and sum each value. */
function sumUpNumbers(str:string): number{
    let splitString = str.split(',');
    let sum:number = 0;
    
    for (let i=0; i<splitString.length;i++){
        sum += Number(splitString[i]);
    }
    return sum;
}

/*Call the sum function on each string element of array, return a new array of sum numbers*/
let newArray = groupedString.map(item => {
    return sumUpNumbers(item);
})

/* Get the highest value of in array*/
let highestValue = Math.max(...newArray); 

/* Find highest 3 values in array */

//sort new array so highest values are in a row
newArray.sort((a,b)=>{
    return a-b;
});

let sumOfTopThreeNumbers = sumUpNumbers(newArray.slice(-3).toString());


