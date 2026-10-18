
const destinations = [
  { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, disponible: true },
  { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, disponible: true },
  { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, disponible: false },
  { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, disponible: true },
  { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, disponible: true },
  { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, disponible: false }
];

// 1. Afficher toutes les villes avec forEach()
destinations.forEach(destination => {
    console.log(destination.ville);
});

// 2. Créer un tableau des villes avec map()
const villes = destinations.map(destination => destination.ville);
console.log("Liste des villes :", villes);

// 3. Destinations dont le prix est inférieur à 1500 DT
const destinationsPasCheres = destinations.filter(destination => destination.prix < 1500);
console.log("Destinations à moins de 1500 DT :", destinationsPasCheres);

// 4. Rechercher la destination ayant l'identifiant 3
const destinationTrouvee = destinations.find(destination => destination.id === 3);
console.log("Destination numéro 3 :", destinationTrouvee);

// 5. Trouver la position de Tokyo
const positionTokyo = destinations.findIndex(destination => destination.ville === "Tokyo");
console.log("Position de Tokyo :", positionTokyo);

// 6. Vérifier s'il existe une destination disponible
console.log("Une destination est disponible :", destinations.some(destination => destination.disponible));

// 7. Vérifier si tous les prix sont supérieurs à zéro
console.log("Tous les prix sont positifs :", destinations.every(destination => destination.prix > 0));

// 8. Calculer le budget total
const budgetTotal = destinations.reduce((total, destination) => total + destination.prix, 0);
console.log("Budget total :", budgetTotal, "DT");

