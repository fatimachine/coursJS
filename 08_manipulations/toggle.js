// Page Js pour 08/05 Toggle 

let bouton = document.querySelector('#cacheImage');
console.log(bouton);

let photo = document.querySelector('.cache');
console.log(photo);

function cliqueBouton() {
    photo.classList.toggle('cache');
}
bouton.addEventListener('click',cliqueBouton);