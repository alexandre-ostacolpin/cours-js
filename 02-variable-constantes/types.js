// .js pour la page types de données

// string
let presentation = "Je m'apelle Michael.";
// let presentation = "Je m\'apelle Michael.";
let age = 25;
let age2 = 60;

// console.log de la variable présentation
console.log(typeof presentation);

//1- Récupérer dans le document un élément dans l'id est p1
//2- Remplacer le contenu d'un élément identifié par son attribut id
3//- Puis on concatène une string et le résulta de la fonction typeof()
//4- Le résulta s'affiche dans la page
document.getElementById('p1').innerHTML = 'type de données pour la variable présentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'type de données pour la variable age : ' + typeof age;

document.getElementById('p3').innerHTML = 'type de données pour la variable age2 : ' + typeof age2;

let phrase = "mon film préféré est \"20000 lieues sous les mers\"."; 

console.log(phrase);

//2- NUMBER

let x = 10;
let y = -20000;
let z = 3.14;

console.log(z);
// 2 valeurs dans le console.log
console.log(typeof x, z);

//3- BOOLEEN

// let vrai = true;
// let faux = false;

let test = 8 > 4;

console.log(typeof test, test);

//4- NUL and UNDEFINED

let arbre;

console.log(typeof arbre);

let nul = null;
let indefini;

document.getElementById('p4').innerHTML = 'le type de la variable nul est : ' + typeof nul;

document.getElementById('p5').innerHTML = 'le type de la variable indefini est : ' + typeof indefini;