// 
let x =  4;
console.log(x);
console.log(typeof x, x);

let testEgalValeur = x == 4 ;
console.log(testEgalValeur);


let testEgalValeurtype = x === 4;
console.log(testEgalValeurtype);


let testdifferenceValeur=  x != 4;
console.log(testdifferenceValeur);


let testdifferenceValeurtype = x !== '4';
console.log(testdifferenceValeurtype);

let ifnerieur = x < 4 ;
console.log(ifnerieur);

let superieur = x > 4;
console.log(superieur);

let inferieurEgal = x <= 4;
console.log(inferieurEgal);


let superieurEgal = x >= 4 ;
console.log(superieurEgal);

alert('Valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur +
     '\n Valeur dans x égale à 4 (en valeur ET en type) ? '  + testEgalValeurtype +
    '\n Valeur dans x different de 4 (en valeur) ? '  + testdifferenceValeur +
    '\n Valeur dans x different de 4 (en valeur OU en type) ? '  + testdifferenceValeurtype +
    '\n Valeur dans x inférieur à 4 (en valeur) ? '  + ifnerieur +
    '\n Valeur dans x supérieure à 4 (en valeur) ? '  + superieur  );
