//let portée de bloc /// var élargie :
//ATTENTION évitons de déclarer plusieur variables dans différents espaces en utilisant un même nom (ici c'est pour la démonstration que nous le faisons)
function porteeNew(){
    let xLet = 1;
    var yVar = 2;
    if (true){
            let xLet = 500;//Let n'aura pas de portée au-delà de ce bloc
            var yVar = 100;//var aura une portée au-delà de ce bloc de code, de ce "if"
            document.getElementById('p1').innerHTML = 'la variable let "xLet" dans if = ' + xLet ;
            document.getElementById('p2').innerHTML = 'la variable let "yVar" dans if = ' + yVar ;
            // console.log(xLet);
        }//Fin de true
        document.getElementById('p3').innerHTML = 'La variable let "xLet" hors du if = ' + xLet ;
        document.getElementById('p4').innerHTML = 'La variable var "yVar" hors du if = ' + yVar ;
        //yVar affichera la dernière valeur déclarer car var a une portée élargie
}//Fin function

porteeNew();