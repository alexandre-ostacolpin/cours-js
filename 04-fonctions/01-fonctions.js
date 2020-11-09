// Les fonctions introduction

// Exemple la fonction random() "aléatoire"

document.getElementById('p1').innerHTML = Math.random();// Ici on exécute le code "caché" derrière la fonction, on apelle la fonction ou on l'invoque

// console.log(Math.ramdom());

//Replace()
let discours1 = 'Bonjour, je suis Donald Trump, et j\'ai gagné !';
// console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');// Le nom d'une fonction est suivi d'un couple de parenthèse qui contient des arguments
document.getElementById('p2').innerHTML = discours2;




// création de fonctions
//1- multiplier le résultat de random() par 100
function randomx100(){
    return Math.random() * 100;
}

// console.log(randomx100());
document.getElementById('p3').innerHTML = randomx100();

//2- Une simple multiplication 

function multiplier(nbr1,nbr2){
    // return (nbr1 * nbr2);
    return ('Multiplions ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2) );
}

// console.log(multiplier(2,6));
document.getElementById('p4').innerHTML = multiplier(145,9);

// soustraction
//division
//addition
//modulo

function soustraire(nbr1,nbr2){
    return ('soustraction de ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2) );
}
document.getElementById('p5').innerHTML = soustraire(10,6);

function addition(nbr1,nbr2){
    return ('addition de ' + nbr1 + ' + ' + nbr2 + ' + ' + (nbr1 + nbr2) );
}
document.getElementById('p6').innerHTML = addition(10,6);

function division(nbr1,nbr2){
    return ('division de ' + nbr1 + ' / ' + nbr2 + ' = ' + (nbr1 / nbr2) );
}
document.getElementById('p7').innerHTML = division(10,6);

function modulo(nbr1,nbr2){
    return ('modulo de ' + nbr1 + ' % ' + nbr2 + ' = ' + (nbr1 % nbr2) );
}
document.getElementById('p8').innerHTML = modulo(30,3)