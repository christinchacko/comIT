const sortFunction  = function(number1 , number2, number3, highToLow  ){
    const numbers = [ number1, number2, number3 ];   
    for (let i = 0; i < numbers.length; i++) {                   
        if(numbers[i] > numbers[i+1] ){
            const temp = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = temp;
        }         
    }
    return (highToLow) ? numbers.reverse().join(',') : numbers.join(',');    
}
console.log(sortFunction(10,8,25, true));