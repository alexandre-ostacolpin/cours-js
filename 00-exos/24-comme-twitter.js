//alert('coucou');

let textarea = document.querySelector('#tweetContenu');
console.log(textarea);

let afficheTotal = document.querySelector('#compteur');
console.log(afficheTotal);

//La fonction va calculer la longueur de la chaîne de caractères contenue dans le texte-area
function compte() {
    let compte = 140 - textarea.value.length;
    afficheTotal.innerHTML = 'Il reste ' + compte + ' caractères';

    if (compte < 0){
        //console.log(compte);
        afficheTotal.classList.remove("bg-warning");
        afficheTotal.classList.add("bg-danger", "text-white");
        afficheTotal.textContent = " Trop de caractères ! Vous devez en retirez " + compte;
        let nbrPositif = math.abs(compte);

        afficheTotal.textContent = " Trop de caractères ! Vous devez en retirez " + nbrPositif;
        //afficheTotal.textContent = compte;
        }else if (compte >= 0){
           afficheTotal.classList.remove("bg-danger");
           afficheTotal.classList.add("bg-warning");  
    }else{
        //sinon rien 
    }
}//Fin fonction

// On pose un écouteur d'évènement avec keyup sur le textarea
textarea.addEventListener('keyup', compte);

//On appelle la fonction
compte();