// js. pour la page les operateurs
let x = 2;
let y = 50;
let z = 4;
let a = x + 1;
let b = x + y;
let c = x * y;
let d = x - y;
let e = d / 3;
let f = 5 % 3;
let g = 2 ** 3;
console.log('a => ',a,', b => ',b,', c => ', c)
console.log(f)
console.log('2 ** 3 = ',g)
// alert('a contient le résultat : ' + a + 
//      '\nb contient : ' + b +
//       '\nc contient : ' + c +
//       '\nd contient : ' + d +
//       '\ne contient : ' + e +
//       '\nf contient : ' + f );
// priorité des calculs
let h =  1 - 2 - 3;
// print
console.log(h)
// le calcul dans j se fait de  droite à gauche
let j= 2 ** 2 ** 2;
console.log(j)

let k = 1 + 4 -5;
console.log(k)

let l = 1- (2 * 3);
console.log(l)
alert('h contient : ' + h + 
    '\nk contient : ' + k + 
    '\nj contient : ' + j +
    '\nl contient : ' + l
);

//Opérateurs d'affectation 
// let chiffre1 = 5;

let chiffre1 = 501;
let chiffre2 = 18;

let somme = chiffre1 - chiffre2;
console.log(somme)


// let prenom = "Audrey est chez elle et fait du js";
// console.log(prenom);
// console.log(typeof prenom);

let m = 20;
let o = 50;

m += 15; // On ajoute 15 à la valeur stockée
o *= 5;

console.log(m);
console.log(o);
