// mon second fichier externe JS 

// creation de trois variables qui ne stockent pas de valeurs 

let prenom;
console.log(prenom);
// let monAge;

var ville;

// Le signe égal est un opérateur d'affectation
prenom = 'Jean'; /*  cette variable contient une chaîne de caractères*/
console.log(prenom);

let monAge;
monAge = 40; /* cette variable contient un nombre */


// ceci fonctionne avec var on initialise la variable après affectation 
nom = 'Yourcenar';
var nom;
console.log(nom);

// ceci ne fonctionne pas avec let il faut initialiser la variable avant affectation
// vehicule = 'autobus';
// let vehicule;
// console.log(vehicule);

var chien = 'Médor';
console.log(chien);
var chien = 'Kiki';
console.log(chien);


// ceci ne fonctionne pas !!!!
// let chat = 'minet';
// console.log(chat);
// let chat = 'minouchette';


if (true) {
    let animal = 'tigre';
    console.log(animal);
}
// console.log(animal);

if (true) {
    var objet = 'lampe';
    console.log(objet);

}
console.log(objet);