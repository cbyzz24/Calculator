const displayEl = document.getElementById("display");

function appendToDisplay(input){
    displayEl.value += input;
    
}

function calculate(){
    displayEl.value = eval(displayEl.value);
}

function clearDisplay(){
    displayEl.value = "";
}