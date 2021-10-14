// JS page switch 

// alert('coucou les loulous');

let x = 15;
console.log(typeof x, x);

// switch(), case break, case break, default

// x = 2 ? ou 5 ? ou 10 ? ou 15 ? ou 20 ? 

switch(x) {//on va switcher, on va commuter sur la variable
    case 2:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break;// break ne pas oublier le break >>> il sort du switch si le cas est vrai
    case 5:
        document.getElementById('p1').innerHTML = 'x contient la valeur 5';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x contient la valeur 10';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x contient la valeur 15';
        break;
    case 20:
        document.getElementById('p1').innerHTML = 'x contient la valeur 20';
        break;
    default:// après default il sortira du switch naturellement
        document.getElementById('p1').innerHTML =  'x ne contient ni 2, ni 5, ni 10, ni 15, ni 20 !!! ';
}//fin switch