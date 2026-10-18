
// Partie A : Manipulation des tableaux
const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

// 1. Copier le tableau Europe
const copieEurope = [...destinationsEurope];
console.log("Copie Europe :", copieEurope);

// 2. Fusionner les deux tableaux
const toutesDestinations = [...destinationsEurope, ...destinationsAsie];
console.log("Toutes les destinations :", toutesDestinations);

// 3. Ajouter Lisbonne au début
const avecLisbonne = ["Lisbonne", ...destinationsEurope];
console.log("Avec Lisbonne :", avecLisbonne);

// 4. Ajouter Londres à la fin
const avecLondres = [...destinationsEurope, "Londres"];
console.log("Avec Londres :", avecLondres);

// 5. Créer un tableau sans Paris
const sansParis = toutesDestinations.filter(ville => ville !== "Paris");
console.log("Sans Paris :", sansParis);


// Partie B : Manipulation des objets

const reservation = {
  numero: 201,
  client: "Nadia",
  destination: "Bali",
  statut: "En attente"
};

// 1. Copier l'objet
const copieReservation = { ...reservation };
console.log("Copie :", copieReservation);

// 2. Modifier le statut
const reservationConfirmee = {
  ...reservation,
  statut: "Confirmée"
};
console.log("Réservation confirmée :", reservationConfirmee);

// 3. Ajouter une assurance
const reservationAssuree = {
  ...reservation,
  assurance: true
};
console.log("Avec assurance :", reservationAssuree);

// 4. Modifier le statut et la destination
const reservationModifiee = {
  ...reservation,
  statut: "Confirmée",
  destination: "Tokyo"
};
console.log("Réservation modifiée :", reservationModifiee);

// Vérifier que l'objet original n'a pas changé
console.log("Objet original :", reservation);
