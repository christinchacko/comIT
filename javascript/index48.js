const msg = "3.14 it/'s a great number but 42 it's the answer to life";
const msgarray = msg.split(' ');
const pi = parseFloat(msgarray[0]);
const numberArray = msg.match(/\d+/g).map(Number);
const numberLength = numberArray.length;
const answerToLife = parseInt(numberArray[numberLength-1]);
const result = pi + answerToLife;
console.log('Output ', result);
console.log(result.toString() + ' is the result of adding pi and answerToLife');