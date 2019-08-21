const student = ['Alby', 'Merin','Justin','Jobin','sidhu'];
let allName='';
const printname = function(name){
    allName += name +' ';
}
for(let i= 0; i<student.length;i++){
    let name = student[i];
    printname(name);
}
console.log(allName);

// const shiftedname = student.splice(2,1);
// console.log(shiftedname);
// allName='';
// for(let i= 0; i<student.length;i++){
//     let name = student[i];
//     printname(name);
// }
// console.log(allName);
// console.log(student)
