// Page JS pour 14/saisie 

document.write('<p>************** EXO WHILE-résultat ***************</p>');
var nbrUtilisateur2 = 0;

var nbrUtilisateur2 =parseInt(prompt('Exo while : saisir un nombre entre 50 et 100, merci '));
console.log(typeof nbrUtilisateur2,nbrUtilisateur2);


var nbrUtilisateurMax2 = (nbrUtilisateur2 <= 100);
console.log(typeof nbrUtilisateurMax2,nbrUtilisateurMax2);

while (nbrUtilisateur2 <= 100) {
   
    if(nbrUtilisateur2 >= 50 && nbrUtilisateur2 <= 100) {
        document.write('<p class = "stabilo">Vous avez saisi : ' + nbrUtilisateur2 + 'cette valeur est bien comprise entre 50 et 100.</p>');
    }else if(nbrUtilisateur2 > 100){
       alert('Veuillez ressaisir un nombre entre 50 et 100, merci ');
}
    // break;

}