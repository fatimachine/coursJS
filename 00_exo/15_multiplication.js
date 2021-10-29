// // Page Js pour 15/Multiplication

// // document.write('<p>************** EXO 1 ***************</p>');

// //exo affichez le résultat d'une mutiplication 
// nombre = prompt("Entrez le numéro de la table:","Saisir un entier ici");

// var i;
// for (i = 1; i <= 10; i++) {
// document.write(nombre+" x "+i+"="+nombre*i+"<br>");
// } 

// while (nombre < 2 || nombre > 9) {
//     nombre = prompt ('Entrez un nombre compris entre 2 et 9 !')
//     console.log(typeof nombre);
// }

// document.write('<p> Vous avez rentrer le chiffre ' + nombre + ' la variable récupérée est bien comprise entre 2 et 9. </p>');

var nombre1 = parseInt(prompt('Choisissez un premier nombre'));
console.log(typeof nombre1,nombre1);

for( var i = 1; i <= 10; i++){
    var resultat = nombre1 * i;
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';
}

var nombre2 = Number(prompt("Et maintenant un nombre entre 2 et 9"));
console.log(typeof nombre2,nombre2);

if (nombre2>=2 &&nombre2 <=9) {
    for (var i = 1; i <=10;i++) {
        
    }
}

