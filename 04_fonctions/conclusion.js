
//page conclusion fonctions 

// coucou();


// function () { on crée une fonction anonyme
//     alert('Alerte exécutée dans une fonction anonyme');
// }

// comment l'appeler ? je la passe en variable
// let monAlerte = function () {
//     alert('Alerte exécutée dans une fonction anonyme');
// }

// monAlerte();

//auto-invocation d'une fonction anonyme

// function () {
//     alert('Alerte dans une seconde fonction');
// }

//fonction anonyme auto-invoquée
// (function (){
//     alert('Alerte dans une seconde fonction');
// }) ();

let para1 = document.getElementById('p1');
console.log(typeof para1, para1);

para1.addEventListener('click',function() {
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1!');
});

