const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

//calculate function
function calculate(event) {
    const clickedbuttonvalue = event.target.value;
    if(clickedbuttonvalue == '=') {
        if(display.value != ' ') {
            display.value = eval(display.value);
        }
    } else if (clickedbuttonvalue == 'C') {
        display.value ='';
    } else {
        display.value += clickedbuttonvalue;
    }
}