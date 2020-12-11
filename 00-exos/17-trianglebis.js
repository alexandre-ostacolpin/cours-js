// JS pour la page exercice triangle bis (sapin) 
              //////////////////////////////
             //  Inscrit dans la console //
            //////////////////////////////
let nbrLigne = 7;
for (let i = 0; i < nbrLigne; i++) {
    let etoile = '';
    let espaces = '';

    for(let col = 0; col < nbrLigne - (i + 1); col++) {
    espaces += ' ';
    }

    for (let col = 0; col <2 * i + 1; col++) {
    etoile += '*';
    }
    console.log(espaces + etoile);
}
                          ///////////////////////////
                         //  Inscrit dans le HTML //
                        ///////////////////////////
for (let i = 0; i < nbrLigne; i++) {
    let etoile = '';
    let espaces = '';
    for(let col = 0; col < nbrLigne - (i + 1); col++) {
        espaces += ' ';
    }
    for (let col = 0; col <2 * i + 1; col++) {
        etoile += '*';
    }
    document.getElementById('p1').innerHTML += espaces + etoile + '<br>';
    }
    for (var s=1; s<=2; s++) {
        document.getElementById('p1').innerHTML += '|';
}