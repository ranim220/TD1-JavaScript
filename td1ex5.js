
const favoris = [
  { id: 1, ville: "Venise", pays: "Italie", visite: false },
  { id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
  { id: 3, ville: "Maldives", pays: "Maldives", visite: false },
  { id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];

// 1. Afficher toutes les destinations favorites
favoris.forEach(f => console.log(f));

// 2. Afficher les destinations non visitées
const nonVisitees = favoris.filter(f => !f.visite);
console.log("Destinations non visitées :", nonVisitees);

// 3. Créer un tableau contenant les noms des villes
const villesFavorites = favoris.map(f => f.ville);
console.log("Villes favorites :", villesFavorites);

// 4. Rechercher la destination ayant l'identifiant 3
const favori3 = favoris.find(f => f.id === 3);
console.log("Destination ID 3 :", favori3);

// 5. Compter les destinations visitées avec reduce()
const nombreVisitees = favoris.reduce(
  (total, f) => total + (f.visite ? 1 : 0),
  0
);
console.log("Nombre de destinations visitées :", nombreVisitees);

// 6. Ajouter une destination sans modifier le tableau original
const nouveauFavori = {
  id: 5,
  ville: "Lisbonne",
  pays: "Portugal",
  visite: false
};

const favorisAjoutes = [...favoris, nouveauFavori];
console.log("Avec Lisbonne :", favorisAjoutes);

// 7. Modifier visite pour Venise sans modifier l'original
const favorisModifies = favoris.map(f =>
  f.id === 1 ? { ...f, visite: true } : f
);
console.log("Venise marquée comme visitée :", favorisModifies);

// 8. Supprimer Marrakech sans modifier l'original
const favorisSupprimes = favoris.filter(f => f.id !== 2);
console.log("Sans Marrakech :", favorisSupprimes);

// Vérifier que le tableau original est toujours intact
console.log("Tableau original :", favoris);
