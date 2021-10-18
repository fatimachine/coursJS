// js pour 03/06

let x = 15, y = -20, z = 0;
console.log(x, y, z,);

if (x>= 20 + y && x <=10 || y <0) {

    document.getElementById('p1').innerHTML = '1- Soit x = ' + x + ' compris entre 0 et 10, soit y strictement positif, soit les deux';

}
if ( x>= 20 + y && (x <= 10 || y < 0)) {
    document.getElementById('p2').innerHTML = 'p2- x positif et soit x inférieur à 10, soit y strictement positif, soit les deux';

}

