// page sur la boucle for

// alert('coucou');

// for
for (let i = 0; i < 10; i++) { // for (1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation)
    document.getElementById('p1').innerHTML += 'La variable i contient et est incrémentée : ' + i + '  à chaque tour de boucle<br>';
    // console.info(typeof i, i);
}

// i = itérator = curseur 

for (let i = 0; i < 10; i++) { // for (1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation)
    document.getElementById('tb1').innerHTML += '<tr><td>La variable i = </td><td>' + i + '  à chaque tour de boucle</td></tr>';
    // console.info(typeof i, i);
}

for (let arreteToi = 0; arreteToi < 100; arreteToi++) {
    if (arreteToi == 56) {// test
        break;// instruction
    }//fin du if
    document.getElementById('p2').innerHTML += 'La variable arreteToi contient ' + arreteToi + ' à chaque tour de boucle.<br>';
}// fin de for