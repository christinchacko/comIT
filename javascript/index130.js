const mutants = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];

const newMutant = [];

mutants.forEach(mutant =>{
    newMutant.push(mutant)
});
const sortedMutants = newMutant.sort();
const newSortedMutants = [
    ...sortedMutants
]
// console.log()
const reversedSortedMutants = newSortedMutants.reverse();
const joinMutants = mutants.join('* ');

console.log('Mutants ', mutants );
console.log('Sorted Mutants ', sortedMutants );
console.log('Reversed Mutants ', reversedSortedMutants );
console.log('Joined Mutants ', joinMutants );

