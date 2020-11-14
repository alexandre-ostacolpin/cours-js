//Page 04-05-conclusion.html

//On va crée une fonction anonyme

// function () {
//     alert('alert exécuter par une fonction anonyme');
// }

// ???? comment appeler ma fonction si elle n'a pas de nom ?
//Je passe en variable 
let alerte = function (){
    alert('alerte exécutée par une fonction anonyme');
}

alerte();

//auto-invocation d'une fonction anonyme
//cela ne fonctionne pas
// function(){
//     alert('alerte !!!! seconde exécution d\'une fonction anonyme');
// }

(function(){
    alert('alerte !!!! seconde exécution d\'une fonction anonyme');
})();

//(On met la fonction dans ce couple de parenthèses)(); suivie d'un couple de parenthèse

// Les fonctions auto-invoquées (self-invoked functions en anglais) vont être des fonctions qui vont s'appeler elles-mêmes. Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.

//Au déclenchement d'un évènement

// function(){
//     alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !');
// }

let paragraphe1 = document.getElementById('p1');

paragraphe1.addEventListener('click', function(){
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !');
});

let paragraphe2 = document.getElementById('p2');

paragraphe2.addEventListener('click',function(){
    alert('Eh ! Tu as bien cliqué sur le paragraphe 2 !');
});

//Fonction récursive 

function decompte(t){
    if (t > 10){
        document.getElementById('p3').innerHTML += t + '<br>';
        return decompte(t - 1);
    }else{
        return t;
    }//Fin if else 
}//Fin de fonction

decompte(15);