let i=0;
let a=-1;
let b=1;
let c=0;
for(i=0; i<=8;i++){
    c=a+b;
    b=a;
    a=c;
    console.log(c);
}