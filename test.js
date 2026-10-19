const double = (a) => a * 2;
console.log(double(2));

const calcul = (prix, taux) => prix * taux;

const calcul2 = (prix) => {
    if (prix > 100)
        return 0.1 * prix;
    else
        return 0.05 * prix;
};

// autre façon d'écrire la fonction calcul2
const calcul3 = (prix) =>
    prix > 100 ? 0.1 * prix : 0.05 * prix;

console.log(calcul3(150));
console.log(calcul3(50));
console.log(calcul3(100,0.2));