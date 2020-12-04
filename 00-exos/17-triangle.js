

console.log('Le triangle avec une boucle for');

let diese = '';

// console.log(typeof diese, diese);

for (var i =1; i < 10; i++){
    diese += '#';
    console.log(diese);
}


// Correction Barroude
// for(i = 0; i <= 7; i++){
//     console.log("#".repeat(i));
// }

//Avec une boucle while

console.log('Un triangle avec un boucle while');
let diese2 = '';
let w1 = 1;

while (w1 <= 10){
    diese2 += '#';
    console.log(diese2);
    w1++;
}