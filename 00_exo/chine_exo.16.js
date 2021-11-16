// Page Js pour Chine exo 16 html 


let Joueur= ' '; 

let i = 0;

while ((Joueur !== 'oui') && (Joueur!== 'non')) {
   Joueur = prompt(' On joue a ni oui ni non ?Allez tape quelque chose :');
    console.log(Joueur);
    i++;
}



document.getElementById('p1').innerHTML = 'Vous avez perdu !';



