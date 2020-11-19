// script pour la page 06-joursuivant.html

var jour = prompt('Quel jour sommes-nous ?');
    if(jour == 'lundi'){
        document.getElementById('p1').innerHTML = 'Demain nous serons mardi';
    }else if(jour == 'mardi'){
        document.getElementById('p1').innerHTML = 'Demain, jour d\'exercice ';
    }else{
        document.getElementById('p1').innerHTML = 'Ce jour est inconnu... ';
    }

switch (leJour){
case 'vendredi':
  document.getElementById('p1').innerHTML = 'Aujourd’hui c’est  Vendredi';
  break;
case 'samedi':
  document.getElementById('p2').innerHTML = 'En fin c’est le week-end!';
  break;
  default:
}
