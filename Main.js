// Get all the keys from document
var button = document.getElementsByClassName('.button');
var buttonfunction = document.getElementsByClassName( '.buttonfunction');
var screen = document.getElementsByClassName('.screen')


// Add onclick event to all the keys and perform operations
for (var i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        // Get the input and button values
        var input = document.getElementsByClassName('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
    }
}


