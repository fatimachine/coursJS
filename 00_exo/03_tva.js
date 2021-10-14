// exo TVA

// alert('coucou');

let prixHT = prompt('Prix Hors Taxes :');
console.log(prixHT);

// console.log("Le prix TTC est de : " + (prixHT * 1.2 + ' €.'));

let prixTTC = prixHT * 1.2;
console.log('Le prix TTC est de : ' + prixTTC + ' €');

document.getElementById('p1').innerHTML = ('Pour un achat HT de ' + prixHT + ' €, le prix TTC est de : ' + prixTTC + ' €');