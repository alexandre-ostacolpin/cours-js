// valeur de retour

function division(a,b){
    if (b == 0){
        return 'Division par 0 impossible !';
    }else{
        //alert('attend je calcule !');
        return a / b;
        alert('Ce bloc de code ne s\'affichera pas !');
    }
}

// console.log(division(5,2));

let nbr1 = prompt('Entrez un premier nombre à diviser');
let nbr2 = prompt('Entrez un second qui divisera le premier');

// console.log(nbr1,nbr2);

let resultatDivision = division(nbr1,nbr2);

document.getElementById('p1').innerHTML = resultatDivision;