// 1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt aber nicht mehr in der Probezeit ist.
age = 24;
motorradFuehrerschein = true;
probezeit = false;
if (age >= 24 || motorradFuehrerschein == true && probezeit == false) {
    console.log("Der Fahrer darf das Motorrad fahren");
} else {
    console.log("Der Fahrer darf das Motorrad nicht fahren");
}
// 2. Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist oder einen Elternteil mit dabei hat.
age = 14;
parent = true;
if (age >= 14 || parent == true) {
    console.log("Das Kind darf den Kinofilm sehen");
} else {
    console.log("Das Kind darf den Kinofilm nicht sehen");
}
// 3. Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, muss ich den Coding Campus besucht haben oder bereits 2 Jahre Berufserfahrung vorweisen.
codingCampus = true;
berufserfahrung = 2;
if (codingCampus == true || berufserfahrung >= 2) {
    console.log("Ich darf den Kurs besuchen");
} else {
    console.log("Ich darf den Kurs nicht besuchen");
}
// 4. Der Bewerber hat eine Chance auf eine Anstellung wenn er bereits über 5 Jahre Erfahrung vorweist oder einen Master Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis besitzt.
erfahrung = 5;
master = true;
leumundszeugnis = "einwandfrei";
if (erfahrung >= 5 || master == true && leumundszeugnis == "einwandfrei") {
    console.log("Der Bewerber hat eine Chance auf eine Anstellung");
} else {
    console.log("Der Bewerber hat keine Chance auf eine Anstellung");
}
