let bouton = document.getElementById('p1');

let rectangle = document.querySelector('.cache');
console.log(rectangle);

function cliqueBouton() {
    rectangle.classList.toggle('cache');
}

bouton.addEventListener('click, cliqueBouton');


document.querySelector('.rectangle').addEventListener('mousehover', 
function(){
    this.style.background='firebrick';
});

document.querySelector('.rectangle').addEventListener('mousehover', 
function(){
    this.style.background='royalblue';
});

document.querySelector('.rectangle').addEventListener('dblclick', 
function(){
    this.style.background='firebrick';
});