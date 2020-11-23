// nouvel objet
// Victor EST un objet
let victor = {
    //nom, age, email sont des propriétés
    nom : ['Victor', 'Hugo'],
    age: 2,
    email : 'totor@hugo.com',

    //Bonjour est une méthode l'objet victor
    bonjour: function(){
        alert('Bonjour je suis ' + this.nom[0] + ' j\'ai ' + this.age + ' ans.');
    }
}


// victor.bonjour();
console.log(typeof victor);
//On accède aux propriétés nom et age qui contient des valeurs
document.getElementById('p1').innerHTML = 'Nom ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age ' + victor.age + ' ans';

//On modifie la valeur de age
victor.age = 80;


document.getElementById('p3').innerHTML = 'Nouvel âge ' + victor.age + ' ans';

victor.bonjour();
// On rajoute une propriété et une valeur associée
victor.metier = 'écrivain, dramaturge et poète';

//Et on crée une nouvelle méthode
victor.bonjour2 = function() {
    alert('Bonjour j\'ai maintenant ' + this.age + ' ans, je suis ' + this.metier + ' célèbre dans le monde entier.');
}

victor.bonjour2();

document.getElementById('p4').innerHTML = 'Bonjour je suis ' + victor.nom[0] + ' ' + victor.nom[1] + '.';