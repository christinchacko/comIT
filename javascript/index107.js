

const isNumber= function(number){
    return (typeof number === 'number') ? true : false;
}

const buildMessage = function(first, second, number1, number2 ){
    return `The ${first} number ${number1} is bigger than the ${second} number ${number2}`;
}

const biggerNumber = function(firstNumber , secondNumber ){

    let message = '';

    if (isNumber(firstNumber) && isNumber(secondNumber)) {
        if (firstNumber > secondNumber) {
            message = `The first number ${firstNumber} is bigger than second number ${secondNumber} are equals`;
        } else if (secondNumber > firstNumber) {
            message = `The second number ${secondNumber} is bigger than first number ${firstNumber} are equals`;
        } else {
            message = `The first number ${firstNumber} and the second number ${firstNumber} are equals`;
        }

    }else{
        message = ' Not a number!!! ';
    }

    console.log(message);   
}

biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);