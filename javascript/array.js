
let count = 0;
const id = setInterval(() => {
    console.log('Hi Christin');
    count++;
}, 1000);

if(count>10)
{
    clearInterval(id);
}