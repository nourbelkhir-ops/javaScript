const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
destinations.forEach(d =>console.log(d.ville));
const villes =destinations.map(d=>d.ville);
console.log(villes);
const prix1500=destinations.filter(d =>d.prix<1500);
console.log(prix1500);
const destinationsId3=destinations.find(d =>d.id===3);
console.log(destinationsId3);
const destinationsIdTokyo=destinations.findIndex(d=>d.ville==="Tokyo");
console.log(destinationsIdTokyo);
const tot =destinations.reduce((s,d)=>s+=d.prix,0);
console.log(tot);
const dispo=destinations.some(d =>d.disponible===true);
console.log(dispo);
const prixverifier=destinations.every(d=>d.prix>0);
console.log(prixverifier);