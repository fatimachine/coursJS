// Page Js 08/02

// js setInterval()

let varImg = 0;
console.log(typeof varImg,varImg);//initialisation de la variable pour l'image

let Timer = window.setInterval('monDiapo()',1000);//Initialisation du timer avec setInterval('nomdelaFonction()',temps en milliseconde)
//console.log(typeof Timer,Timer);

// let getAttrImg = document.getElementById('imgDiapo1').getAttribute('src');
// console.log(typeof getAttrImg,getAttrImg);

function monDiapo(){
    varImg += 1;//on incrémente et on affecte 1
    imgDiapo1.setAttribute('src','img/'+ varImg+ '.jpg');
    console.log('la varImg = ' + varImg);
    if(varImg == 6) {//clear interval permet de stopper le timer dès que la variable est égale à 6
        clearInterval(Timer);
    }
}

