//
alert('Bienvenue dans le jeu !');

//On doit trouver un nombre au hasard que l'utilisateur doit trovuer
//1- Le nombre
let nombreAuHasard = Math.random();
console.log(typeof nombreAuHasard, nombreAuHasard);

//2- On multiplie le nombre trouvé par 100
let nombreX100 = nombreAuHasard * 100;
console.log(nombreX100);

//3- On arrondi le nombre
let nombreArrondi = Math.floor(nombreX100);//Math.floor arrondi un nombre décimal au nombre inférieur
console.log(nombreArrondi);

//2 et 3 autre solution pour arrondir le nombre
//nombreX100 = parseInt(nombreAuHassard * 100);
// console.log(nombreX100);

// suite de l'exo

// var nombreUtilisateur = prompt('Le jeu est simple : je pense à un nombre entre 0 et 100.A ton avis quel est ce nombre ? Tu a droit à 6 essais ...')

// for (var i = 1; i <= 100; i++) {
//     if (i === nombreUtilisateur) {
//         alert('bravo un coockie ! Vous avez trouvez')
//     } else if (nombreUtilisateur > i){
//         alert('Non, try again le nombre est plus petit')

//     } else if (nombreUtilisateur < i ){
//         alert('Non, try again le nombre est plus grand')
//     }else {
//         alert('J\'ai dit un nombre compris entre 1 et 100');
//     }
//     console.log("i");
// }


// console.log("Bienvenue dans ce jeu de devinette !");
// var solution = Math.floor(Math.random() * 100) + 1; // Je génère un nombre aléatoire entre 1 et 100
// // console.log("(La solution est " + solution + ")");
// for (var i = 0; i <= 6; i++) { // je lance la boucle, où i <= au nombre d'essai voulu
//     var essai = Number(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
//     if (essai === solution) {
//         console.log("Vous avez trouvé, bravo !");
// 		console.log("Vous avez trouvé en " + i + " essai(s)")
//         break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
//     } else if ( essai < solution){ // comparent la valeur "essai" à la valeur "solution"
//             console.log(essai + " est trop petit");
//     } else if (essai > solution){
//             console.log(essai + " est trop grand");
//     }else (essai !== solution){
//         console.log("Je t'ai demander un nombre");
//     }
// }
// if (i === 6){
//     console.log("Vous avez perdu ! Le nombre était : " + solution); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
// }