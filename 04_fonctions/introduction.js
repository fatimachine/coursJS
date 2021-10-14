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

function multiplier(nbr1,nbr2) {
    // return (nbr1*nbr2);
    return ('Multiplication : ' + nbr1 + ' x ' + nbr2 + ' = ' +(nbr1 * nbr2));
}

console.log(multiplier(2,56));

document.getElementById('p4').innerHTML = multiplier(10,9);