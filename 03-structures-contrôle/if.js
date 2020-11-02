// .js pour la page if
// condition if
let x = 4;
let y = 0;


if(x > 1){// TEST true ? --> La condition ou le test est évaluer à true
    alert('x contient une valeur supérieure à 1');//BLOC DE CODE si c'est true on éxécute ce bloc de code
}

if(x == y){
    alert('x et y contiennent la même valeur');
}

if(y){// L'alerte ne s'affiche pas car la valeur de y contient 0, qui est une des valeur qui renvoit false (cf. la liste dans la page .html)
    alert('La valeur de y est évalué à true');// puisque c'est faux on n'exécute pas
}

//Inversion du test logique > vérifier que c'est faux


if((x > 1) == false){//Au lieu de vérifier que le test est vrai on va vérifier qu'il est faux
    alert('x contient une valeur inférieur à 1');
}

if((x == y) == false){
    alert('x et y ne contienne pas la même valeur');
}

//VOIR 