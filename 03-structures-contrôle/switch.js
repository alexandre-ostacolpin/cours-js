//page switch

let w = 15;

switch(x) {//On va switcher sur la variable
    case 2://Un des "cas" possible ou une des "issues"
        document.getElementById('p1').innerHTML = 'x stocke la valeur 2';
        break;//Break ne pas oublier le break ! là il sort du switch
    case 5:
        document.getElementById('p1').innerHTML = 'x stocke la valeur 5';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x stocke la valeur 10';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x stocke la valeur 15';
        break;  
    default:// après default il sortira naturellement
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni 5, ni 10, ni 15, ni 20';
}
