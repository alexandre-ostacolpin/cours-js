// Les scripts pour l'intro sur les variable
// Mon second fichier JS
// Création de 3 variables, cependant elles ne stockent pas de valeurs 
// let prenom;
// let monAge;

// var ville;
// On déclare uen variable et on l'initialise en même temps
let prenom = 'Jean'; // Une chaîne de caractères

// Pour initialiser une variable on utilise l'opérateur = CE N'EST LE SIGNE EGAL !!! C'est un opérateur d'affectation


// Autre moyen d'initialiser une variable
let monAge;
monAge = 40; // un chiffre ! pas besoin de ''

console.log(prenom);
console.log(monAge);

prenom = 'Alexandre';

console.log(prenom);

// Ceci fonctionne 
nom = 'Isola';
var nom; 

console.log(nom);

// Ceci ne fonctionne pas
// ville = 'Suresnes';
// let ville;

let ville;
ville = 'Suresnes';

console.log(ville);


// avec prompt() on a une fenêtre avec un champ de saisie
// prompt(); 


// redéclaration des variables

// Ceci fonctionne
var chien = 'médor';
var chien = 'Max';

console.log(chien);

// Ceci ne fonctionnera pas 

// let chat = 'mimou';
// let chat = 'obi-wan';