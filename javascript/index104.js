fibSeries = function(){
    let a = 0;
    let b = 1;

    for (let i = 1; i <= 10; i++) { 
        sum = a + b;
        a = b;
        b = sum;        
        console.log(sum);    
    }

}
fibSeries();
fibSeries();
fibSeries();
