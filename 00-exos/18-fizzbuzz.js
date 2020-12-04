//Fizzbuzz

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if ((i % 5 === 0) && !(i % 3 === 0)) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    if ((i % 5 === 0 && i % 3 === 0)) {
        console.log("FizzBuzz");
    }
}


// for (var nombre = 1; nombre <= 100;  nombre++) {
//     if((nombre % 3 === 0) && (nombre % 5 === 0)){
//         console.log('FiizBuzzz');
//     } else if (nombre % 3 === 0){
//         console.log('fizz');
//     }else if (nombre % 5 === 0){
//         console.log('buzz');
//     }else {
//         console.log(nombre);
//     }
// }




// for(var i = 0; i <= 100; i++){
//     if(i % 15 === 0){ // modulo de 15 qui équivaut à un modulo pour 3 et 5
//          document.getElementById('p1').innerHTML += 'FizzBuzz <br>';
//      }else if(i % 3 === 0){
//          document.getElementById('p1').innerHTML += 'FIzz <br>';
//      }else  if(i % 5 === 0){
//          document.getElementById('p1').innerHTML += 'Buzz <br>';
//      }else{
//          document.getElementById('p1').innerHTML += i + '<br>';
//      }
//  } // fin de la boucle for


// for (var nombre = 1; nombre <= 100; nombre++) {
//     var message = '';//initialisation de la var message
//     if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
//         message +='Fizz';
//         }
//     if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
//         message += 'Buzz';
//         }
//     if (message == ''){
//         message = nombre;
//         }
//     console.log(message);
// }//fin de for