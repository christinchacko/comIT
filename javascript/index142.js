let firstPerson;
let secondPerson;
firstPerson = ['christin', 'chacko', 'address1', 20];
secondPerson = ['christin', 'chacko', 'address1', 20];

const person = (accumulator, currentValue) => accumulator + currentValue;
const makeStirng = (StringArray) => StringArray.reduce(person);

// const result = firstPerson.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
// });

// const result1 = secondPerson.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
// });

console.log(makeStirng(firstPerson) === makeStirng(secondPerson) ? 'same person' : 'different persons');