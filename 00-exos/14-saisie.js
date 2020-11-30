
let nombre = 0;//valeur initiale qui va nous permettre d'entrr dans la boucle
console.log(nombre + ' est la variable d\'initialisation');

// while

while ((nombre < 50) || (nombre > 100)){//tant que : tous les nombre non compris entre 50 et 100 ; soit il est inférieur à 50 soit il est supérieur a 100
    nombre = prompt('Entrez un nombre entre 50 et 100');
}

console.log(nombre + ' > nombre récupéré');