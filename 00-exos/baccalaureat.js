var moyenne = parseFloat(prompt('Quelle est ta moyenne au bac'));// Le parseFloat permet d'assurer que la réponse sera considéré comme un "number", dans le cas d'un nombre décimal

if((moyenne > 0)  && (moyenne < 10)){
    document.getElementById('p1').innerHTML =('Vous êtes recalé');
}else if ((moyenne >= 10) && (moyenne <= 12)){
    document.getElementById('p1').innerHTML =('Tu passe =)');
}else if((moyenne >= 12) && (moyenne <= 20)){
    document.getElementById('p1').innerHTML =('Bravo pour la mention');
}else {
    document.getElementById('p1').innerHTML = 'Vous devez saisir une note note entre 0 et 20';
}




// var moyenne = parseFloat(prompt('Qual é a sua média de notas'));

// if((moyenne > 0) && (moyenne < 10)){
//     document.getElementById('p1').innerHTML =('Você está falhando');
// }else if ((moyenne >= 10) && (moyenne <= 12)){
//     document.getElementById('p1').innerHTML =('Você passa =)');
// }else if((moyenne >= 12) && (moyenne <= 20)){
//     document.getElementById('p1').innerHTML =('Bravo pela menção !');
// }else {
//     diocument.getElementById('p1').innerHTML= 'Você deve inserir uma nota entre 0 e 20';
// }