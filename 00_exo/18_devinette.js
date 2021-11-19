// Page js pour devinette 


//
alert('Bienvenue  !');


let nbreAleatoire = Math.random();
console.log(typeof nbreAleatoire, nbreAleatoire);


let nbre100 = nbreAleatoire * 100;
console.log(nbre100);



let nbre = Math.floor(nbre100);
  




for (var i = 1; i <= 6; i++ ) {
   var choix = parseInt(prompt('Entre un nombre entre 1 et 100.  Tu as 6 essais.'));
        if (!isNaN(choix)) {
            if (nbre === choix) {
                alert('Bien joué');
                i = 6;
            } else {
                if (nbre < choix) {
                    alert('Le nombre est plus petit ; essai ' + i + '/6');
                } else {
                    alert('Le nombre est plus grand ; essai ' + i + '/6');
                }
            }
        } else {
            alert('Il faut choisir un nombre !');
        }       
        
    }

    alert('La bonne réponse était ' + nbre);
    document.write('<p class = "stabilo">La bonne réponse était : ' + nbre + ' . </p>');

 
    console.log(nbre);