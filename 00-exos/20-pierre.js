var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");

var choix = function () {
	choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
};


var nonValide = function () {
	while (choixUtilisateur !== 'pierre' && choixUtilisateur !== 'feuille' && choixUtilisateur !== 'ciseaux') {
		confirm(choixUtilisateur + " l'entrer n'est pas valide !");
		choix();
	}
};
nonValide();


var choixOrdi = Math.random();

if (choixOrdi <= 0.34) {
	choixOrdi = 'pierre';
} else if (choixOrdi <= 0.67) {
	choixOrdi = 'feuille';
} else {
	choixOrdi = 'ciseaux';
}
var ordiGagne = choixOrdi;

ordiGagne = "Victiore pour l'ordinnateur";
var userGagnent = choixUtilisateur;

userGagnent = "Victiore pour l'utilisateur";
console.log('L\'ordinnateur a choisi ' + choixOrdi);

var comparer = function (choix1, choix2) {
	if (choix1 === choix2) {
		return "Egalité " + choixUtilisateur;
	} else if (choix1 === 'pierre') {
		if (choix2 === 'ciseaux') {
			return 'La pierre gagne ! ' + userGagnent;
		} else {
			return 'La feuille gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
		}
	} else if (choix1 === 'feuille') {
		if (choix2 === 'pierre') {
			return 'La feuille gagne ! ' + userGagnent;
		} else {
			return 'Le ciseaux gagnent ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
		}
	} else if (choix1 === 'ciseaux') {
		if (choix2 === 'feuille') {
			return 'Le ciseaux gagne ! ' + userGagnent;
		} else {
			return 'La pierre gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi le ' + choixUtilisateur;
		}
	}
};

console.log(comparer(choixUtilisateur, choixOrdi));