let screenContent = []

function activateDisplay() {

    let calculator_display = document.querySelector('.calculator-display');
    let screen_text = document.querySelector('#screen-text');
    screen_text.textContent = 'Welcome to the calculator!';

}

function addValueToScreen(value) {

    /* Adds the given value to the screen of
    the calculator */

    /* Check if the welcome message is still there. If it is, we want to clear the screen so that
     only the user input displays.
     */

    let screen_text = document.querySelector('#screen-text');
    if (screen_text.textContent == 'Welcome to the calculator!') {

        screen_text.textContent = '';

    }

    // Check if value is integer or operator.
    if (value != '+' && value != '-' && value != '*' && value != '/') {

        value = parseFloat(value);

    }

    screenContent.push(value);
    screen_text.textContent += value;


}

function clearScreen() {

    let calculator_display = document.querySelector('#calculator-display');
    let screen_text = document.querySelector('#screen-text');
    screen_text.textContent = '';
    screenContent = [];

}

function doTheMath(result) {

    /* Evaluates the array passed in from
    the calculator and returns the arithmetic
    answer. i.e. ['10','*','2'] will return 20.
    */

    // If the user enters something that doesn't start with a number, return error.
    let firstItem = parseInt(result[0]);
    firstItem = Number.isNaN(firstItem)
    if (firstItem == true) {

        return 'Invalid expression. Your calculation does not start with a number';

    }


    let expression = '';
    result.forEach(element => {

        expression += element;

    });

    // result == array

    let answer = Function('return ' + expression)();
    return answer;


}


function activateButtons() {

    /* Adds event listeners to each button
    on the calculator. This allows the buttons
    to send their value when they are clicked.
    */

    const button_1 = document.querySelector('#button-1');
    button_1.addEventListener('click', () => {

        addValueToScreen(button_1.textContent)
    });

    const button_2 = document.querySelector('#button-2');
    button_2.addEventListener('click', () => {

        addValueToScreen(button_2.textContent)
    });

    const button_3 = document.querySelector('#button-3');
    button_3.addEventListener('click', () => {

        addValueToScreen(button_3.textContent)
    });

    const button_4 = document.querySelector('#button-4');
    button_4.addEventListener('click', () => {

        addValueToScreen(button_4.textContent)
    });

    const button_5 = document.querySelector('#button-5');
    button_5.addEventListener('click', () => {

        addValueToScreen(button_5.textContent)
    });

    const button_6 = document.querySelector('#button-6');
    button_6.addEventListener('click', () => {

        addValueToScreen(button_6.textContent)
    });

    const button_7 = document.querySelector('#button-7');
    button_7.addEventListener('click', () => {

        addValueToScreen(button_7.textContent)
    });

    const button_8 = document.querySelector('#button-8');
    button_8.addEventListener('click', () => {

        addValueToScreen(button_8.textContent)
    });

    const button_9 = document.querySelector('#button-9');
    button_9.addEventListener('click', () => {

        addValueToScreen(button_9.textContent)
    });

    const button_0 = document.querySelector('#button-0');
    button_0.addEventListener('click', () => {

        addValueToScreen(button_0.textContent)
    });

    const button_equals = document.querySelector('#button-equals');
    button_equals.addEventListener('click', () => {

        let screen_text = document.querySelector('#screen-text');

        if (screenContent.length == 0) {

            screen_text.textContent = 'Lol, try actually entering stuff noob.';

        }

        else {

            answer = doTheMath(screenContent);
            screen_text.textContent = answer;

        }

    });

    const button_add = document.querySelector('#button-add');
    button_add.addEventListener('click', () => {

        addValueToScreen(button_add.textContent)
    });

    const button_divide = document.querySelector('#button-divide');
    button_divide.addEventListener('click', () => {

        addValueToScreen(button_divide.textContent)
    });

    const button_multiply = document.querySelector('#button-multiply');
    button_multiply.addEventListener('click', () => {

        addValueToScreen(button_multiply.textContent)
    });

    const button_clear = document.querySelector('#button-clear');
    button_clear.addEventListener('click', () => {

        clearScreen()
    });

    const button_enter = document.querySelector('#button-enter');
    button_enter.addEventListener('click', () => {

        let screen_text = document.querySelector('#screen-text');

        if (screenContent.length == 0) {

            screen_text.textContent = 'Lol, try actually entering stuff noob.';

        }

        else {

            answer = doTheMath(screenContent);
            screen_text.textContent = answer;

        }

    });

}

activateDisplay();
activateButtons();