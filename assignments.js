//Assignment 1: Values and Variables
const country = "Romania";
const continent = "Europe";
let population = 20000000;


console.log(country);
console.log(continent);
console.log(population);

//Assignment 2: Data TYpes
const isIsland = false;
const language = "romanian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Assignment 3: let, const and var
// am schimbat mai sus in const

//Assignment 4: Basic Operators
halfPopulation = population / 2;
console.log("Jumatate din populatie este " + halfPopulation);

population = population + 1;
console.log("Populatia tarii plus 1 este " + population);

let finPopulation = 6000000;
let avgPopulation = 33000000;
if (population > finPopulation) {
    console.log("Da, populatia Romaniei este mai mare decat populatia Finlandei")
}

if (population > avgPopulation) {
    console.log("Da, populatia Romaniei este mai mare decat media")
} else {
    console.log("Nu, populatia Romaniei este mai mica decat media")
}

let description = "Portugal is in Europe and its 11 million people speak portuguese";
console.log(description);