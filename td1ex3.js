

// Partie A : Déstructuration d'un tableau
const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];

// 1. Extraire le premier et le deuxième pays
const [pays1, pays2] = pays;
console.log("Premier pays :", pays1);
console.log("Deuxième pays :", pays2);

// 2. Extraire uniquement le troisième pays
const [, , pays3] = pays;
console.log("Troisième pays :", pays3);

// 3. Extraire le premier pays et les autres
const [destinationPrincipale, ...autresPays] = pays;
console.log("Destination principale :", destinationPrincipale);
console.log("Autres pays :", autresPays);


// Partie B : Déstructuration d'un objet
const voyage = {
  destination: "Bali",
  prix: 1800,
  duree: 10,
  transport: "Avion",
  hotel: "5 étoiles"
};

// 1. Extraire destination et prix
const { destination, prix } = voyage;
console.log("Destination :", destination);
console.log("Prix :", prix);

// 2. Extraire destination dans une variable appelée ville
const { destination: ville } = voyage;
console.log("Ville :", ville);

// 3. Extraire prix et durée avec des valeurs par défaut
const { prix: prixVoyage = 0, duree = 7 } = voyage;
console.log("Prix du voyage :", prixVoyage);
console.log("Durée :", duree);

// 4. Fonction avec destructuring dans les paramètres
function afficherVoyage({ destination, prix, duree, transport, hotel }) {
  console.log("Destination :", destination);
  console.log("Prix :", prix, "DT");
  console.log("Durée :", duree, "jours");
  console.log("Transport :", transport);
  console.log("Hôtel :", hotel);
}

afficherVoyage(voyage);
