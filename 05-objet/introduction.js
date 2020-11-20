// JS pour l'introductions aux objet

// alert('coucou');

let auteur = 'victor Hugo';

//ici on a une variable-objet tout simplement un objet
let utilisateur = {

        //nom, age et email sont des propriétés de l'objet utilisateur
    nom : ['victor', 'marie', 'Hugo'],//Ici nous avons des propriétés qui sont dans un tableau un "aray"= tableau
    age : 2,
    email : 'totor@hugo.com',
    adresse : 'à Paris dans son avenue',

    //Une méthode un peu comme une fonction

    bonjour : function(){
        alert('j\'ai ' + this.age + 'ans mon prénom est ' + this.nom[0] + ' ' + this.nom[1] + ' ' + this.nom[2] + '.');
    }

}

console.log(typeof utilisateur);// On dira que c'est un objet

utilisateur.bonjour();// Ici on affiche

