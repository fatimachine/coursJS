// Page Js pour formulaire 08/04
// contrôle du formulaire avec une fonction
// vérification des contenus dans les 2 input 

// function controleForm() {  // event ; paramètre à enlever également
//     //event.preventDefault(); // pour empêcher l'envoi du formulaire , à enlever quand le site est terminé

//     if ( document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15 ) {
//         console.log(document.form1.pseudo.value);
//         console.log(document.form1.pseudo.value.length);
//         alert('Votre pseudo doit contenir au moins 5 et au plus 15 caractères');
//     }

//     //idem pour le mot de passe entre 3 et 12 caractères
// }

function controleForm() { 
    if ( document.form1.mdp.value.length < 3 || document.form1.mdp.value.length > 12 ) {
        console.log(document.form1.mdp.value);
        console.log(document.form1.mdp.value.length);
        alert('Votre mot de passe doit contenir entre 3 et 12 caractères');
    }

}

//contrôle du formulaire d'inscription avec une fonction
let formInscrip = document.getElementById('formulaireInscription');
console.log(formInscrip);

//écoute de l'envoie du formulaire

formInscrip.addEventListener('submit',inscriptionForm);

//création de la fonction
function inscriptionForm(event) {
    event.preventDefault();
    //récupération du contenu des champs du formulaire
    //
    let prenom = event.target.prenom.value;
    nom = event.target.nom.value;
    pass = event.target.pass.value;
    confpass = event.target.confpass.value;
    console.log(prenom,nom,pass,confpass);

    //expression régulière
    //https://regex101.com/
    
    let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // let regex = new RegExp("([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}");
    console.log(regex);

    //prenom et nom ne sont pas vides
    // classList représente toute les classes de l'élément event.target
            // add ajoute une class à l'élément event.target
            //remove enlève la classe
            // console.log(event.target.prenom.classList);
            

    if (prenom !=='' || nom !=='') {
        if (prenom.length < 2) {
            event.target.prenom.classList.add("error");
            event.target.prenom.classList.remove("valide");
        }else {
            event.target.prenom.classList.add("valide");
            event.target.prenom.classList.remove("error");
        }
        if (nom.length < 4) {
            event.target.nom.classList.add("error");
            event.target.nom.classList.remove("valide");
        }else {
            event.target.nom.classList.add("valide");
            event.target.nom.classList.remove("error");
        }
    }
//condition 2 -  différencier les mots de passe saisis
if ( confpass !== pass) {
    // event.target.pass.classList.add("error");
    // event.target.pass.classList.remove("valide");
    // event.target.confpass.classList.add("error");
    // event.target.confpass.classList.remove("valide");

    placeholder1.innerHTML = "Vos mots de passe doivent être identiques";
    placeholder1.classList.add("rouge");
    document.getElementById('placeholder2').innerHTML="Vos mots de passe doivent être identiques";
    document.getElementById('placeholder1').classList.add("rouge");
 
}else if (pass.length < 5 || pass.length >15) {
    // event.target.pass.classList.add("error");
    // event.target.pass.classList.remove("valide");
    // event.target.confpass.classList.add("error");
    // event.target.confpass.classList.remove("valide");
    alert('Votre mot de passe doit contenir entre 5 et 15 caractères!!');

}else {
    event.target.pass.classList.add("valide");
    event.target.pass.classList.remove("error");
    event.target.confpass.classList.add("valide");
    event.target.confpass.classList.remove("error");


}


}//Fin fonction 2

//une fonction sur le clique du bouton effacer pour vider les inputs

document.getElementById('resetForm').addEventListener('click',function(event){
event.target.form.prenom.value = '';
event.target.form.nom.value = '';
event.target.form.pass.value = '';
event.target.form.confpass.value = '';
});//fin fonction reset

