// js pour la page if

// alert('coucou');

let x = 4;
let y = 0;
//1er if
if (x > 1) {// if(TEST) si test est évalué à true 
    alert('1/ x contient ' + x + ' et cette valeur est supérieure à 1');// on exécute ce bloc de code
}

// 2e 
if (y < 1 ) {
    alert('2/ y contient '  + y + ' et cette valeur est inférieure à 1');
}

// 3e
if(x == y) {
    alert('3/ x = ' + x + ', et y = ' + y + ' les deux variables contiennent la même valeur');
}

// 4e 
// l'alerte ne s'affiche pas car la valeur de y qui contient 0, 0 est une des valeurs qui renvoie false
if(y) {// 0 renvoie toujours false
    alert('4/ la valeur de y est évaluée à "true"');
}

 // 5e
let chaine = '';

if(NaN){
    alert('5/ true /// vrai');
}

//6e
// au lieu de vérifier que le test est vrai on va vérifier qu'il est faux
if((x > 1) == false){// si le résultat du test est faux ... ((false) == false)
    // ... le code s'exécute
    alert('6/ x qui contient ' + x + ' est inférieur à 1');
}

//7e
if((x == y) == false){
    alert('7/ x et y ne contiennent pas la même valeur');
}