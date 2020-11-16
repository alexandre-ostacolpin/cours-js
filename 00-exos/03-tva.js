// script pour la page 03-tva.html

var prix = prompt('prix HT');
var ht = new Number(prix);
var tva = ht * 1.20;
console.log('Le prix TTC est de ' + tva + ' euro ');
// document.getElementById('p1').innerHTML()