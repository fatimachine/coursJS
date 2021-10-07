let x = 4;
 let y =0;
 if (x > 1) {
     alert ('x contient  ' + x +  '  et cette valeur est supérieure à 1'  ) ;
 }
 if (y<1) {
    alert ( ' y contient ' + y +  '  et cette valeur est inférieure');
 }
 if (x==y) {
     alert('x=' + x +' et , y = ' + y + '  centiennent la même valeur ');
 }

//  l'alert ne s'affiche pas car la valeur  de y  qui contient 0 ,0 est une des valeurs qui renvoie false
 if (y) {
     alert (' la valeur de y évaluée à "true"');
 }
 
//5

let chaine = '';
if (chaine) {
    alert ('5/true /// vrai');
}

//6 au lieu de vérifier que le test est vrai on va vérifier qu'il est faux
if ((x>1) == false){
    //si le résultat du test est faux...((false)==false);
    // le code s'exécute
    alert('6/ x  qui contient ' + x +' est inférieur à 1');
}

//7
if((x == y)== false){
    alert('7/ x et y ne contiennent pas la même valeur ');
}