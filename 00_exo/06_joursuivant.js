// Page JS pour 06 jour suivant 

var jour = prompt ('Quel jour sera-t-on demain ?');
console.log(jour);

function quelleJour(jour){
    if (jour == 'lundi' ) {
        var semaine = document.write('<p> Aujourdh\'ui nous sommes: ' + jour + ' demain nous serons Mardi !</p>');
    }else if (jour == 'mardi' ) {
        var semaine = document.write('<p>Aujourdh\'ui nous sommes: ' + jour + 'demain nous serons Mercredi !</p>');
    }else if (jour == 'mercredi' ){
        var semaine = document.write('<p>Aujourdh\'ui nous sommes: ' + jour + ' demain nous serons Jeudi !</p>');
    }else if (jour == 'jeudi' ) {
        var semaine = document.write('<p>Aujourdh\'ui nous sommes: ' + jour + ' demain nous serons Vendredi!</p>');
    }else if (jour == 'vendredi' ){
        var semaine = document.write('<p> Aujourdh\'ui nous sommes: ' + jour + ' demain nous serons Samedi!</p>');
    }else if (jour == 'samedi' ){
        var semaine = document.write('<p> Aujourdh\'ui nous sommes: ' + jour + ' demain nous serons Dimanche!</p>');
    }else {
        var semaine = document.write('<p>Jour incorrect</p>');
    }
    return semaine;
}//fin fonction
//on appelle la fonction après
quelleJour(jour);