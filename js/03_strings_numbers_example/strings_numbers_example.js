// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
// Preis von 8 Äpfeln
// Preis von 17 Bananen
// Preis von 1 Tonne Äpfel
// Preis von 1 Tonne Bananen

let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleWeight = 0.34;
let bananaWeight = 0.22;

console.log("Anzahl Bananen pro Kilo: " + 1 / bananaWeight);
console.log("Anzahl Äpfel pro Kilo: " + 1 / appleWeight);

let applePricePerPiece = applePricePerKilo / appleWeight;
let bananaPricePerPiece = bananaPricePerKilo / bananaWeight;

console.log("Preis pro Banane: " + bananaPricePerPiece);
console.log("Preis pro Apfel: " + applePricePerPiece);

console.log("Preis von 8 Äpfeln: " + applePricePerPiece * 8);
console.log("Preis von 17 Bananen: " + bananaPricePerPiece * 17);

console.log("Preis von 1 Tonne Äpfel: " + applePricePerKilo * 1000);
console.log("Preis von 1 Tonne Bananen: " + bananaPricePerKilo * 1000);