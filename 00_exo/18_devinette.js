// Page js pour devinette 


//
alert('Bienvenue  !');


let nbreAleatoire = Math.random();
console.log(typeof nbreAleatoire, nbreAleatoire);


let nbre100 = nbreAleatoire * 100;



let nombreArrondi = Math.floor(nbre100);




for (var i = 1; i <= 6; i++ ) {
   var choix = parseInt(prompt('Choisis un nombre entre 0 et 100.  Tu as 6 essais.'));
        if (!isNaN(choix)) {
            if (nombreArrondi === choix) {
                alert('Bien joué');
                i = 6;
            } else {
                if (nombreArrondi < choix) {
                    alert('Le nombre est plus petit ; essai ' + i + '/6');
                } else {
                    alert('Le nombre est plus grand ; essai ' + i + '/6');
                }
            }
        } else {
            alert('Il faut choisir un nombre !');
        }       
        
    }

    alert('La bonne réponse était ' + nombreArrondi);
    document.write('<p class = "stabilo">La bonne réponse était : ' + nombreArrondi + ' . </p>');

    console.log(nombreArrondi);
    console.log(nbre100);