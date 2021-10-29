// Page JS pour 14/saisie 

document.write('<p>************** EXO WHILE-résultat ***************</p>');
var nbrUtilisateur2 = 0;
console.log(typeof nbrUtilisateur2,nbrUtilisateur2);

while ((nbrUtilisateur2 < 50) || (nbrUtilisateur2 )> 100) {
 
    nbrUtilisateur2 =parseInt(prompt('Exo while : saisir un nombre entre 50 et 100, merci '));
    console.log(typeof nbrUtilisateur2);
}
  
document.write('<p class = "stabilo">Vous avez saisi : ' + nbrUtilisateur2 + 'cette valeur est bien comprise entre 50 et 100.</p>');