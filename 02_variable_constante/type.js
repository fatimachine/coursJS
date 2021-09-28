// JS pour la page types

//1 STRING
// let presentation = "Je m'appelle Michaël.";
let presentation = 'Je m\'appelle Michaël.';
console.log(typeof(presentation));

let age = 25;
let age2 = 56;

// 1- récupérer dans le doc un élément dont l'id est XX
// 2- remplacer le contenu d'un élément identifié par son id 
// 3- puis on concatène une string et le résultat de la fonction typeof()
// 4- le résultat s'affiche dans la page
document.getElementById('p1').innerHTML = 'Type de données pour la variable presentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'Type de données pour la variable age : ' + typeof age;

document.getElementById('p3').innerHTML = 'Type de données pour la variable age2 : ' + typeof age2;

let monFilm1 = 'Mon film préféré est "20 000 lieux sous les mers" avec Kirk Douglas';

console.log(monFilm1);

let monFilm2 = "Mon film préféré est \"20 000 lieux sous les mers\"";

console.log(monFilm2);

//2 - NUMBER

let x = 10;
let y = -20000;
let z = 3.14;

console.log(z);
// on peut passer deux arguments dans la console
console.log(typeof z, z);

document.getElementById('p4').innerHTML = 'Type de données pour la variable x : ' + typeof x;


//3 BOOLEAN

// true = vrai 
// false = faux

let test = 8 > 4;
console.log(typeof test, test);
// console.log(typeof(test), test);

//4 et 5 NULL et UNDEFINED

let nul = null;
let indefini;

console.log(typeof nul);

document.getElementById('p5').innerHTML = 'Le type de la variable nul est : ' + typeof nul;

document.getElementById('p6').innerHTML = 'Le type de la variable indefini est : ' + typeof indefini;