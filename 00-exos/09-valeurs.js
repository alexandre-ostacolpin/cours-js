var nb1 = parseInt(prompt("entrez nb1 "));
var nb2 = parseInt(prompt("entrez nb2 "));
var nb3 = parseInt(prompt("entrez nb3 "));

console.log(nb1, nb2, nb3);
if (nb1 > nb2){
    nb1 = nb3 * 2;
}else{
    nb1++;
    if (nb2 > nb3){
        nb1 = nb1 + nb3 * 3;
    }else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}