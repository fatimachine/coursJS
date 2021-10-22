// Page JS pour 08 baccalaureat 


let moyenneBac = parseFloat(prompt ('Quel est ta moyenne au bac ?'));
console.log( typeof moyenneBac,moyenneBac);



    if (!isNaN(moyenneBac) ) {
        if (moyenneBac < 10 ) {
            document.getElementById('p1').innerHTML ='Travaille plus  et retente en candidat libre à la rentrée : ' + moyenneBac +' ';
         }else if (moyenneBac >= 10 && moyenneBac < 12 ) {
            document.getElementById('p1').innerHTML ='Reçu sans mention : ' + moyenneBac + '.' ;
         }else if (moyenneBac>= 12 && moyenneBac <= 20 ) {
            document.getElementById('p1').innerHTML = 'Reçu avec mention : ' + moyenneBac +', Bien joué !';
         }else {
            document.getElementById('p1').innerHTML = 'inserez une moyenne entre 0 et 20';
         }
    }else{
        document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre ';
    }
    
    
    
    