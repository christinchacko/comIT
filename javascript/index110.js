const average = function(numbers){  
    let sum = 0;
    for(let i = 0; i<numbers.length;i++){
        sum = sum + numbers[i];
    }
    return sum/numbers.length;    
}
const numbersArray = [2, 4, 10, 20, 30];
console.log(`The average is ${average(numbersArray)}`);