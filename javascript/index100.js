console.log("calling a function to print even nos from 0 to 100");
console.log(printEvenNos());

function printEvenNos(){
    for(let i= 1; i<=100; i++){
        if(i%2 == 0){
           console.log(i);
        }
    }
}