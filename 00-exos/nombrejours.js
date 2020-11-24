//montrer comment dans un prompt() mettre du texte
var mois = parseInt(prompt('Quel mois choisissez-vous' , 'n du mois, entre 1 et 12'));

var moisNom = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
console.log(moisNom[4]);

console.info(moisNom.length);

var numMois = moisNom.indexOf('mai');
console.log(numMois);

if (isNaN(mois)){// si ce n'est pas un number
        document.getElementById('p1').innerHTML = 'votre choix n\'est pas un chiffre.';
    }else{//sinon c'est un nombre
            if (mois == 2){//Un nombre égal à 2 etc...
                document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 28 jours';
            }else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
                document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 30 jours';
            }else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)){
            document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 31 jours';
            }else {
                document.getElementById('p1').innerHTML = 'Votre choix de numéro, le ' + mois + ' n\'est pas dans le calendrier !';
        }
    }//Fin du if else principal 



// if ((mois > 1) && (mois < 12)) {
//     document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 31 jours'
// }else if ((mois > 2) && (mois < 12)){
//     document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 31 jours'
// }else if ((mois > 3) && (mois < 12)){
//     document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 28 jours'
// }else if ((mois > 4) && (mois < 12)){
//     document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 30 jours'
// }else if ((mois > 5) && (mois < 12)){
//     document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 31 jours'
// }else if ((mois > 6) && (mois < 12)){
//     document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 30 jours'
// }    