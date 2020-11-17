// script pour la page 04-conversion.html

var tempCel = Number(prompt("Entrez une température en degrés celsius :"));
var tempFar = tempCel * 9 / 5 + 32;
document.getElementById('p1').innerHTML = '* ' + tempCel + ' Degré Celsuis = ' + tempFar + ' Farhenheit';
console.log(tempCel + " °C = " + tempFar + " °F"); 