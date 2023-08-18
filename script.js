const num = 266219;
const numsArray = num.toString().split('');

let sum = parseInt(numsArray[0]);
for (let i=1; i < numsArray.length; i++) {
    sum *= parseInt(numsArray[i]);
}
sum **= 3;

console.log( sum.toString().substring(0, 2) );