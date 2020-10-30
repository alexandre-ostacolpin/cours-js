// Mon premier fichier .js - Alexandre Colombbus
// Ce fichier est lié à la page 01-04-introduction.html

// Un commentaire monoligne

/* Un commentaire multiligne en JS */

/* un commentaire multiligne sur une seule ligne */

/* Une ligne 
une autre CTRL + MAJ + A */

let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup(){
    alert('Mangerrrrr moi');
}

function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para)
}