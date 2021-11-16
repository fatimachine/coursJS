
let disMoi= ' '; 

let i = 0;

while ((disMoi !== 'oui') && (disMoi!== 'non')) {//initialisation de la variable avec une string vide,on y rentrera la réponse de l'utilisateur
    //console.log(typeof disMoi,disMoi);
    disMoi = prompt(' On joue a ni oui ni non ?Allez tape quelque chose :');
    console.log(disMoi);
    i++;
}



document.getElementById('p1').innerHTML = 'Vous avez perdu !';



