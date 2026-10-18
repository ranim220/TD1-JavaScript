

const reservations = [
  { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
  { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
  { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
  { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
  { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" }
];

// 1. Réservations confirmées
const confirmees = reservations.filter(
  r => r.statut === "Confirmée"
);
console.log("Réservations confirmées :", confirmees);

// 2. Noms des clients
const clients = reservations.map(r => r.client);
console.log("Noms des clients :", clients);

// 3. Rechercher la réservation numéro 103
const reservation103 = reservations.find(
  r => r.numero === 103
);
console.log("Réservation 103 :", reservation103);

// 4. Montant total des réservations confirmées
const totalConfirme = reservations
  .filter(r => r.statut === "Confirmée")
  .reduce((total, r) => total + r.montant, 0);
console.log("Total confirmé :", totalConfirme, "DT");

// 5. Vérifier si toutes les réservations sont confirmées
const toutesConfirmees = reservations.every(
  r => r.statut === "Confirmée"
);
console.log("Toutes confirmées :", toutesConfirmees);

// 6. Créer un tableau des clients et de leurs voyages
const voyagesClients = reservations.map(r => ({
  client: r.client,
  voyage: r.destination
}));
console.log("Clients et voyages :", voyagesClients);
