for(var i = 1; i <= 10; i++){
    if(i % 2 === 0){// le reste est égal à 0 donc le chiffre est pair 
        console.log(i + ' est pair')
    }else{// sinon c'est impair
        console.log(i + ' est impair');
    }
}




var nbrUtilisateur = Number(prompt('Rentre un nombre entier.'));
console.log(typeof nbrUtilisateur, nbrUtilisateur);
var nbrUtilisateurMax = (nbrUtilisateur + 10);
console.log(typeof nbrUtilisateurMax, nbrUtilisateurMax);

for(var i = nbrUtilisateur; i < nbrUtilisateurMax; i++){
    if(i % 2 === 0){// le reste est égal à 0 donc le chiffre est pair 
        document.getElementById('p1').innerHTML += + i + ' est pair <br>';
    }else{// sinon c'est impair
        document.getElementById('p1').innerHTML += + i + ' est impair <br>';
    }
}




var chiffre = Number(prompt('exo 3 : choississez un nombre entier'));
console.log(typeof chiffre);
var chiffreMax = (chiffre + 10);
console.log(chiffreMax);
while (chiffre <= chiffreMax){
    if(chiffre % 2 === 0){//acolade
        document.getElementById('p2').innerHTML += chiffre + ' est pair <br>';
    }else{
        document.getElementById('p2').innerHTML += chiffre + ' est impair <br>';
    }
    chiffre++;
}