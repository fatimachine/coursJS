// JS pour ifelseifelse 

let x = 1;
console.log(x);

if(x > 1) {/* si c'est */
    alert('VRAI x contient une valeur strictement supérieure à 1 ');
}else if (x == 1) {/* sinon si c'est vrai */
    alert('SINON VRAI x contient une valeur égale à 1');
}else {/* sinon */
    alert(' FAUX x contient une valeur strictement inférieure à 1 ');
}

x =-10;
console.log(x);

if(x > 1){
alert(' 1/ x contient une valeur strictement supérieur à 1');
}else if (x == 1) {
    alert('2/ x contient une valeur égale à 1');
}else if (x<1) {
    alert( '3/ x contient une valeur strictement inférieur à 1');
}else if(x<0) {
    alert(' 4/x contient une valeur strictement inférieur à 0');
}else if(x < -2) {
    alert(' 5/ x contient une valeur strictement inférieur à -2');
}else {
alert('6/ la valeur de x n\'a pas pu être comparée à un nombre');
}