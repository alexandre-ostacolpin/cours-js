var nombre1 = parseInt(prompt('entrer votre premier nombre'));//Si je mets parseInt je suis sûr que l'on attend un nombre 
var nombre2 = parseInt(prompt('entrer votre deuxième nombre'));
console.info(nombre1,nombre2)

if( (!isNaN(nombre1)) && (!isNaN(nombre2)) ) {
            if (nombre1 < nombre2){//si nombre1 et inférieur
                document.getElementById('p1').innerHTML = ('Votre 1er nombre ' + nombre1 + ' est plus petit que ' + nombre2 + '.');
            }else if (nombre1 > nombre2){//si il est supérieur
                document.getElementById('p1').innerHTML = ('votre 1er nombre ' + nombre1 + ' est plus grand que ' + nombre2 + '.');
            }else if (nombre1 == nombre2){// sinon ils sont égaux
                document.getElementById('p1').innerHTML = ('votre 1er nombre ' + nombre1 + ' et égal à ' + nombre2 + '.');
            }//Fin if condition comparaison
        }else{
            document.getElementById('p1').innerHTML = 'vous n\'avez pas saisi le nombre(s)';
};








// var nombre1 = parseInt(prompt('seu primeiro número'));
// var nombre2 = parseInt(prompt('seu segundo número'));
// console.info(nombre1,nombre2)

// if( (!isNaN(nombre1)) && (!isNaN(nombre2)) ) {
//             if (nombre1 < nombre2){
//                 document.getElementById('p1').innerHTML = ('seu primeiro número ' + nombre1 + ' É menor que ' + nombre2 + '.');
//             }else if (nombre1 > nombre2){
//                 document.getElementById('p1').innerHTML = ('seu primeiro número ' + nombre1 + ' É mais alto do que ' + nombre2 + '.');
//             }else if (nombre1 == nombre2){
//                 document.getElementById('p1').innerHTML = ('seu primeiro número ' + nombre1 + ' É igual a ' + nombre2 + '.');
//             }    
//         }else{
//             document.getElementById('p1').innerHTML = ('você não digitou o número');
// };
