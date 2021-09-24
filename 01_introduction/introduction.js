// Mon premier fichier .js

// alert('coucou');

/* un commentaire JS sur 
plusieurs lignes */

let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup(){
    alert('hé Patrick vous avez un chargeur ?');
}

function ajout(){
    let para = document.createElement('p');
    // console.log(para);
    para.textContent = 'Paragraphe ajouté';
    // console.log(para);
    document.body.appendChild(para);
}