// Page JS pour comparaison de nombres 

let nbr1 = parseInt(prompt ('Rentrez un premier nombre'));
console.log( typeof nbr1,nbr1);

let nbr2 = parseInt(prompt ('Rentrez un second nombre'));
console.log( typeof nbr2,nbr2);

// faisons le if else if qui compare deux nombres en sup,inférieur ou égal 
//le console.log nous dit Nan not a number
if ( nbr1 > nbr2) {
   document.getElementById('p1').innerHTML = 'Le nombre ' + nbr1 + ' est plus grand que le nombre ' + nbr2 + ' . ';
} else if (nbr1<nbr2) { // sinon si cela est vrai
    document.getElementById('p1').innerHTML = 'Le nombre ' + nbr1 + ' est plus petit que le nombre ' + nbr2 + '.';
} else { // sinon
    document.getElementById('p1').innerHTML = 'Les deux nombres sont égaux . ';
}

// isNaN() nous dit "ce n'est pas un nombre "
//!isNaN()nous dit  "c'est bien un nombre"

//on doit vérifier d'abord que ce sont bien des nombres qui sont saisi par l'utilisateur dans un if else
//si ce sont des nombres on fera le test de comparaison
//sinon on dira ce ne sont pas des nombres

if ((!isNaN(nbr1))&&(!isNaN(nbr2))) {
    // if ((!isNaN(nbr1))&&(!isNaN(nbr2))) cela nous dit ce sont bien des nombres ,tous les deux
    if ( nbr1 > nbr2) {
        document.getElementById('p1').innerHTML = 'Le nombre ' + nbr1 + ' est plus grand que le nombre ' + nbr2 + ' . ';
     } else if (nbr1<nbr2) { // sinon si cela est vrai
         document.getElementById('p1').innerHTML = 'Le nombre ' + nbr1 + ' est plus petit que le nombre ' + nbr2 + '.';
     } else { // sinon
         document.getElementById('p1').innerHTML = 'Les deux nombres sont égaux . ';
     }
}else{
    document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre ';
}

