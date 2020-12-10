//

// var hours = Number(prompt("Heure"));
// var minutes = Number(prompt("Minutes"));
// var seconds = Number(prompt("Secondes"));

// seconds += 1;

// if (seconds === 60){
//     seconds = 00;
//     minutes += 1;
// }if (minutes === 60){
//     minutes = 00;
//     hours += 1;
// }if (hours === 24){
//     hours = 60;
// }

// document.getElementById('p1').innerHTML = ('dans une seconde il sera : ' + hours + 'h' + minutes + 'n' + seconds + 's');

//Correction patrick

var heure = prompt('entrez l\'heure');
var minute = prompt('entrez les minutes');
var seconde = prompt('entrez les secondes');


if ((heure >= 0) && (heure <= 23) && (minute >=0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)){
    seconde ++;
        if (seconde === 60){
            seconde = 0;
            minute++;
            if (minute === 60){
                minute = 0;
                heure++;
                if (heure === 24){
                    heure =0;
                }
            }
        }
        document.getElementById('p1').innerHTML = 'Dans une seconde il sera ' + heure + 'h' + minute + 'mm' + seconde + 's.';
}else {
    document.getElementById('p1').innerHTML = 'Heure incorrecte';
}