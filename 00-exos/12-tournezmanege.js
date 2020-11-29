let nbrWhileManege = 0;

while (nbrWhileManege < 10){
    nbrWhileManege++;

    document.write ('Avec while : c\'est le tour n ' + nbrWhileManege + '<br>');
}

document.write('<hr>');

for (var i = 1; i <= 10; i++){
    document.write ('Avec for : c\'est le tour n ' + i + '<br>');
}

document.write('<hr>');

let nbrTour = Number(prompt('Combien de tour de manège voulez-vous faire ?'));
let nbrWhileManege3 = 1;

    while (nbrWhileManege3 <= nbrTour){
        

        document.getElementById('p1').innerHTML += 'Avec while prompt : c\'est le tour n ' + nbrWhileManege3 + '<br>';
        nbrWhileManege3++;
    }
console.log(nbrWhileManege3);

let nbrTour2 = Number(prompt('Combien de tour de manège voulez-vous faire ?'));
    for(var i = nbrTour2; i <= 100; i++){
        document.getElementById('p2').innerHTML += 'Avec for : c\'est le tour n' + i + '<br>';
    }