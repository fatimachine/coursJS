// js pour 05/01

// coucou();

let auteur ='Victor Hugo';

let utilisateur = {//ici on a une variable objet
    //nom,email,age et adresse sont des propriétés de l'objet utilisateur
    //nom : ici nous avons des propriétés qui sont dans un tableau, un 'array' 'qui commence à 0
    nom:['Victor','Marie','Hugo'],// un array>indices : 0,1,2
    age: 2,// indice 1
    email:'toto@hugo.fr', // indice 2
    adresse:'Besançon',// indice 3

    bonjour: function() {
        alert(' Bonjour j\'ai ' +this.age + ' ans et mon nom est ' + this.nom [0] + ' ' + this.nom [1] + ' ' + this.nom [2] );
    }
}

console.info(typeof utilisateur,utilisateur);
utilisateur.bonjour();