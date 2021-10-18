// js pour 05/02

// coucou();

//victor est un nouvel objet

let victor = {
    nom:['Victor','Marie','Hugo'],
    age: 2,
    email:'toto@hugo.fr', 

// bonjour est une méthode
    bonjour: function() {
        alert(' Bonjour je suis ' + this.nom [0] + ' ' + this.nom [2] +'  et j\'ai ' + this.age +' ans');
    }
}


// console.info(typeof victor,victor);
// victor.bonjour();

//on accède aux propriétés qui contiennent des valeurs
document.getElementById('p1').innerHTML = 'Nom :' + victor.nom;
document.getElementById('p2').innerHTML = 'Age:' + victor.age + ' ans.';
document.getElementById('p3').innerHTML = 'Email:' + victor.email;

victor.age = 80;

console.info(typeof victor,victor);
document.getElementById('p4').innerHTML = 'Nouvel âge:' + victor.age + ' ans.';

// on rajoute deux nouvelles propriétés et leurs valeurs associées
victor.metier ='écrivain, dramatruge et poète';
console.info(typeof victor,victor);
victor.metier ='écrivain éxilé, dramatruge et poète';
console.info(victor.metier);
victor.adresse = 'en son avenue, à Paris';
console.info(victor.adresse);

// et on crée une nouvelle méthode
victor.bonjour2 = function() {
    alert('Bonjour j\'ai maintenant ' + this.age +' ans , je suis ' +this.metier + ' et je suis célèbre dans le monde entier.');
}

victor.bonjour2();
document.getElementById('p5').innerHTML = ' Bonjour je suis ' + victor.nom [0] + ' ' + victor.nom [2] +' ';