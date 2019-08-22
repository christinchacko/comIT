const superHero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70
}

console.log('SuperHero Properties -',superHero);
// console.log(superHero.secretName);
// console.log(superHero.sidekick);
console.log('SuperHero Speed - ',superHero.speed);
superHero.speed = 80;
console.log('SuperHero Speed - ',superHero.speed);
console.log('Second Sidekick -', superHero.sidekick[1]);