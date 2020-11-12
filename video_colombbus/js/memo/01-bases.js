// LES BASES DE JAVASCRIPT

// On parle habituellement de JavaScript ou JS.
// Il s'agit d'un langage de script : cf. cours sur les machines
// C'est à dire qu'on peut directement écrire le programme en JS, le programme 
// n'aura pas besoin d'être compilé.

// Histoire du JS:
// - c'est un langage de programmation
// - JS a été inventé en 1995 par Brendan Eich
// - il est standardisé sous le nom d'ECMAScript

// ATTENTION Bien que les 2 langages aient un nom se ressemblant, JAVA n'a 
// ATTENTION rien à voir avec JAVASCRIPT.

// INSTRUCTION  
// une instruction est une action que doit faire JS
// on parle d'instruction ou d'une commande

// on peut utiliser une balise script dont le texte contenu
// sera interprété comme du JS

// il est plus courant d'utiliser un fichier .js séparé

// balise script
// On peut écrire du JS dans la balise script
// On peut charger un fichier externe en utilisant avec un attribut qui 
// contient le nom du script src="" à charger

// notre première instruction :
console.log( 4 )

// CONSOLE
// On utilise console.log() pour écrire des informations qui s'afficheront ds la 
// console.

// La console se trouve dans le navigateur : elle sert à afficher des messages
// en parallèle de la page HTML sans que l'utilisateur ne soit importuné :
// c'est donc un outil pour les développeurs.
// On peut utiliser F12 ou Ctrl i pour ouvrir la console.

// TYPE DE DONNÉES
// En programmation, il existe différents types d'éléments afin de réaliser les 
// opérations souhaitées : par exemple pour le calcul, il existe le type 
// "Number", etc.

// TYPE NOMBRE - Number
// Lorsqu'on écrit un nombre dans la console, il s'affiche en vert
console.log(2)

// avec le type Number, il est possible de faire des calculs, sur les nombres :
console.log(2 + 2)

// JS observe le type Number de chaque côté du signe + donc comprend qu'il doit 
// réaliser l'addition classique.

// il existe les mêmes priorités d'opérations qu'en math
console.log(2 + 3 * 4) // la multiplication est prioritaire
console.log((2 + 3) * 4) // on l'outrepasse avec les parenthèses