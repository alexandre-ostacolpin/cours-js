var nbr1 = Number(prompt('Choisis un 1er nombre'));
console.log(nbr1);

for (var i = 1; i <=10; i++) {//1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation
    var resultat = nbr1 * i;    // on fait l'opération avant et on la passe en variable
    document.getElementById('p1').innerHTML += nbr1 + ' x ' + i + ' = ' + resultat + '<br>';//le nombre1 à chaque passage FOIS la variable i = la variable résultat
}
for (var i = 1; i <=10; i++) { 
    document.getElementById('p1').innerHTML += nbr1 + ' x ' + i + ' = ' + nbr1 * i + '<br>';//on fait l'opération dans la bloce de code
}