// js pour portee des variables 

// alert('coucou');
//ATTENTION évitons de déclarer plusieurs variables dans différents espaces en utilisant un même nom : ici on le fait pour la démo!!!!

function porteNew (){
let xLet = 1;
var yVar = 2;

if (true) {
    let xLet = 500;// let n'aura pas de portée au delà de ce bloc
    var yVar = 200;// var aura une portée au delà de ce bloc

    document.getElementById('p1').innerHTML = 'la variable let "xlet" dans le if = ' + xLet;
    document.getElementById('p2').innerHTML = 'la variable var "yvar" dans le if = ' + yVar;
} // fin if
    document.getElementById('p3').innerHTML = 'la variable let "xlet" hors du if = ' + xLet;
    document.getElementById('p4').innerHTML = 'la variable var "yVar" hors du if = ' + yVar;//yVar affichera la dernière valeur déclarée car var a une portée élargie

}// fin fonction 

 porteNew();

 let x = 5;
 var y = 10;

 function portee1() {// dans cette fonction j'appelle des variables qui ont une portée globale
     document.getElementById('p5').innerHTML = 'Depuis la fonction <code>portee1()</code> : x = ' + x + ' et y =' + y;
 }


 function portee2() {

    let a = 123;
    var b = 456;

    document.getElementById('p6').innerHTML = 'Depuis la fonction <code>portee2()</code> : a = ' + a + ' et b = ' + b;
}


function portee3() {// les variables locales ont le même nom que les variables globales

    let x = 222;
    var y = 444;// la fonction va utiliser les variables locales

    document.getElementById('p7').innerHTML = 'Depuis la fonction <code>portee3()</code> : x = ' + x + ' et y = ' + y;
}

// appel des fonctions
portee1();
portee2();
portee3();


// on affiche les globales x et y 
document.getElementById('p8').innerHTML = 'ce code n\'est pas dans  une fonction! Je suis dans l\'espace global et je cherche les contenus de x et y : x = ' + x + ' et y = ' + y;

// on va tenter d'afficher les locales cf.message dans la console,message normal
document.getElementById('p9').innerHTML = 'depuis  l\'espace locale et je cherche des contenus de a et b : a = ' + a + ' et b = ' + b;

