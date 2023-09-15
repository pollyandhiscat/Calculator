let screenContent = []

function addValueToScreen(value) {

    /* Adds the given value to the screen of
    the calculator */

    screenContent.push(value);

}

function clearScreen() {

    const display = document.querySelector('#display');
    screenContent = [];
    let content = screenContent.join();
    display.textContent = content

}

function activateButtons() {

    /* Adds event listeners to each button
    on the calculator. This allows the buttons
    to send their value when they are clicked.
    */

    const button_1 = document.querySelector('#button-1');
    button_1.addEventListener('click', addValueToScreen(button_1.textContent));
    
    const button_2 = document.querySelector('#button-2');

    const button_3 = document.querySelector('#button-3');

    const button_4 = document.querySelector('#button-4');

    const button_5 = document.querySelector('#button-5');

    const button_6 = document.querySelector('#button-6');

    const button_7 = document.querySelector('#button-7');

    const button_8 = document.querySelector('#button-8');

    const button_9 = document.querySelector('#button-9');

    const button_0 = document.querySelector('#button-0');

    const button_equals = document.querySelector('#button-equals');

    const button_add = document.querySelector('#button-add');

    const button_divide = document.querySelector('#button-divide');

    const button_multiply = document.querySelector('#button-multiply');

    const button_clear = document.querySelector('#button-clear');
    button_clear.addEventListener('click', () => {
        
        clearScreen()});

    const button_enter = document.querySelector('#button-enter');
    button_enter.addEventListener('click', () => {

        let content = screenContent.join();
        const screen = document.querySelector('#calculator-display');
        screen.textContent = content;
        
    });

}

activateButtons();