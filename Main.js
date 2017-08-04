// Get all the keys from document
var button = document.querySelectorAll('.button');
var screen = document.querySelector('.screen');
var work = document.querySelector('.work')
var clear = document.querySelector('.clear')








for (var i = 0; i < button.length; i++) {
 button[i].addEventListener("click", function (){
 output = this.innerHTML;
 screen.innerHTML += output;
});

work.addEventListener("click", function (){

screen.innerHTML = eval(screen.innerHTML) 

});

clear.addEventListener("click", function () {
screen.innerHTML = ""








});
}

