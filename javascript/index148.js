const superHero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70,
    otherHeros: [{name:'Spiderman', age: 40},{name:'Superman', age: 70}],
    callMe: function(){
        console.log("calling me");
    }
}

console.log('SuperHero Properties -',superHero);
// console.log(superHero.secretName);
// console.log(superHero.sidekick);
console.log('SuperHero Speed - ',superHero.speed);
superHero.speed = 80;
console.log('SuperHero Speed - ',superHero.speed);
console.log('Second Sidekick -', superHero.sidekick[1]);
console.log(superHero.otherHeros[1].name);
superHero.callMe();