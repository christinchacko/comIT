let x=0;
let y=0;
for(let i= 1; i<=1000; i++){
    if(x==20)
    break;
    if(i%2 == 0){
        y=y+i;
        x++;
    }
}
console.log("Sum of First 20 even nos" , y);