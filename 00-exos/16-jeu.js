
// var OuiNon = oui;

// while ((OuiNon = oui) || (OuiNon = non)){
//     OuiNon = prompt('Alors on joue au ni oui ni non');
// }

var disMoi ='';//Initialisation de la variable avec une string vide, on y rentrera la réponse de l'utilisateur.
console.log(typeof disMoi, disMoi);
var i = 1;

while ((disMoi !== 'oui') && (disMoi !== 'non')){
    disMoi = prompt('On joue au ni oui ni non ?? Allez !');
    i++;
}

document.getElementById('p1').innerHTML = ('<p> Perdu </p>')
    