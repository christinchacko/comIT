const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit']

const changedMutants = mutants.map(mutant =>{
    if(mutant === 'Professor X' || mutant === 'Phoenix' || mutant === 'Logan' || mutant === 'Gambit'){
        return '<3'.concat(mutant);
    }else{
        return mutant;
    }
});

console.log(mutants);
console.log(changedMutants);