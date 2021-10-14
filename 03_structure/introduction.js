// js intro structures de contrôle

// alert('coucou');
// TEST 1
let x = 4;
// console.log(x);
// console.log(typeof x);
console.log(typeof x, x);// type d'x ET valeur de x

let egalValeur = x == 4;
console.log(egalValeur);

let egalValeurType = x === 4;
// contenu égal en type de données ET valeur
console.log(egalValeurType);//

let differenceValeur = x != 4;// différent de 
console.log(differenceValeur);

let differenceValeurType = x !== 4; // différent en valeur OU en type 
console.log(differenceValeurType);

let inferieur = x < 4;
console.log(inferieur);

let superieur = x > 4;
console.log(superieur);

let inferieurEgal = x <= 4;
console.log(inferieurEgal);

let superieurEgal =  x >= 4;
console.log(superieurEgal);

alert('Valeur dans x égale à 4 (en valeur) ? : ' + egalValeur +
    '\n Valeur dans x égale à 4 (en valeur ET en type) ? '  + egalValeurType +
    '\n Valeur dans x different de 4 (en valeur) ? '  + differenceValeur +
    '\n Valeur dans x different de 4 (en valeur OU en type) ? '  + differenceValeurType +
    '\n Valeur dans x inférieur à 4 (en valeur) ? '  + inferieur +
    '\n Valeur dans x supérieure à 4 (en valeur) ? '  + superieur);
