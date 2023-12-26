// Declaring Variables.
const monitor = document.querySelector('.monitor')

// Storing Calculation to local storage.
let calculation = localStorage.getItem('calculation') || ``;

display();

// Function to update button inputs.
function updateCalculation(value) {
    calculation += value;
    display();
}

// Function to display the calculation in input box.
function display() {
    monitor.value = `${calculation}`
}

// Function for clear button to remove the stored values from local storage.
function Clear() {
    calculation = '';
    localStorage.removeItem('calculation');
    display();
}

// Calculator Function.
function calculator() {
    try {
        calculation = eval(calculation);
        if (eval(calculation) == undefined) {
            calculation = ``;
        }
        display();
        localStorage.setItem('calculation', calculation);
    }
    catch (error) {
        monitor.value = `MathError`
    }
}

// Delete Function.
function deletebtn() {
    calculation = calculation.slice(0, -1);
    display();
}