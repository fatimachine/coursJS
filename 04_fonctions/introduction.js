// fonctions 

// alert('coucou');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();// ici on exécute le code "caché" derrière la fonction, on appelle la fonction ou on l'invoque



//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;


// création de fonctions

//1- multiplier le résultat de random() par 100

function randomFois100() {
    return Math.random() * 100;
}

console.log(randomFois100);

document.getElementById('p3').innerHTML = randomFois100();

// 2nd exemple une multiplication
// mot clef + nom de la fonction()

function multiplier(nbr1,nbr2) {//les paramètres de la fonction
    // return (nbr1*nbr2);// la fonction simplement
    return ('Multiplication : ' + nbr1 + ' x ' + nbr2 + ' = ' +(nbr1 * nbr2));// bloc de code qui renvoie une string avec le calcul
}

console.log(multiplier(2,56));// la fonction avec les arguments

document.getElementById('p4').innerHTML = multiplier(2.56);

// exo faites une fonction pour soustraire un nombre d'un autre
// soustraction

function soustraire(nbr1,nbr2) {
   
    return ('Soustraction : ' + nbr1 + ' - ' + nbr2 + ' = ' +(nbr1 - nbr2));// bloc de code qui renvoie une string avec le calcul
}

console.log(soustraire(56,2));

 document.getElementById('p4').innerHTML =soustraire(10,9);

 function addition(nbr1,nbr2) {
   
    return ('Addition : ' + nbr1 + ' + ' + nbr2 + ' = ' +(nbr1 + nbr2));// bloc de code qui renvoie une string avec le calcul
}

console.log(addition(56,2));

 document.getElementById('p6').innerHTML =addition(28,30);


 function leModulo(nbr1,nbr2) {
   
    return ('le modulo ,le reste de la division : ' + nbr1 + ' / ' + nbr2 + ' est ' +(nbr1 % nbr2));// bloc de code qui renvoie une string avec le calcul
}

console.log(leModulo(10,3));

 document.getElementById('p7').innerHTML =leModulo(10,3);

 
 function diviser(nbr1,nbr2) {
   
    return ('Division : ' + nbr1 + ' / ' + nbr2 + ' est ' +(nbr1 / nbr2));// bloc de code qui renvoie une string avec le calcul
}

console.log(diviser(98,3));

 document.getElementById('p8').innerHTML =diviser(98,3);

 