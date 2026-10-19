const fruitRouges = ["fraise", "framboise", "cerise"];

// for of
for (let fruit of fruitRouges) {
    console.log(`la ${fruit} c'est bon`);
}

// forEach
fruitRouges.forEach(fruit => {
    console.log(`la ${fruit} c'est bon`);
});

// mapping : retour un tableau
const nombres = [12, 3, 4, 10];
let dble = nombres.map(n => n * 2);
console.log(dble);

// retourne un simple affichage
let d2 = nombres.forEach(n => console.log(n * 2));

// les filtres
const paires = nombres.filter(n => n % 2 === 0);
console.log(paires);

// destructuring
