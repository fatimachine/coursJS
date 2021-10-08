// js page pour operateur 

// alert('coucou');

let x = 5, y = -20;

console.log(x, y);

// Et && 

if (x >= 0 && x <= 10) {//ET noté && dans cette exemple chaque condition doit être vraie
    document.getElementById('p1').innerHTML = ' x vaut ' + x + ' et est compris entre 0 et 10    ';
}

// Ou 
if (y < -10 || y > 10) {//OU noté || dans cette exemple ici une seule comparaison suffit pour que cela soit true 
    document.getElementById('p2').innerHTML = ' y vaut ' + y + ' et est une valeur plus petite que -10 ou plus grande que 10  ';
}

// NO = ! ce n'est pas vrai 
if (!(x <= 2)) { // opérateur inversé = ! ce n'est pas vrai ,5 n'est pas inférieur ou égal à 2, autrement dit si le test est false l'opérateur inversé (la négation !)renvoie true donc on exécute
    document.getElementById('p3').innerHTML = ' x qui contient ' + x + ' est supérieur à 2  ';
}