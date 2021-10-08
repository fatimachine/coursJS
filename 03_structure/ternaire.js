// js pour opérateur ternaire 

alert('coucou');

let x = 15;
let y = -20;

// faire un if else pour vérifier si x est supérieur ou égal à 10 

if(x > 10 || x > 10) {
    document.getElementById('p1').innerHTML = ' IF /x vaut ' + x + ' et  est supérieur à  10    ';
}else{
    document.getElementById('p1').innerHTML = ' ELSE / x vaut ' + x + ' et  est égale à  10    ';
}

// la même condition en ternaire 
// ? = if; : = else 

document.getElementById('p2').innerHTML = x >=10 ? ' x est supérieur ou égal à 10' : 'x est inférieur à 10';

// tester si y est supérieur à 10 
// if else p3

// la même en ternaire en p4

if(y > 10 || y > 10) {
    document.getElementById('p3').innerHTML = ' IF /y vaut ' + y+ ' et  est supérieur à  10    ';
}else{
    document.getElementById('p3').innerHTML = ' ELSE / y vaut ' + y+ ' et  est inférieur à  10    ';
}

// ternaire

document.getElementById('p4').innerHTML = y >=10 ? ' y est  supérieur à 10' : 'y est inférieur à 10';