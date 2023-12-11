// Storing Calculation to local storage.
let calculation = localStorage.getItem('calculation') || ``;
display();

// Function to update button inputs.
function updateCalculation(value) {
    calculation += value;
    display();
}

// Function to display in calculation in input box.
function display() {
    const monitor = document.querySelector('.monitor')
    monitor.value = `${calculation}`
}

// Function for clear button to remove the stored values from local storage.
function Clear() {
    calculation = '';
    localStorage.removeItem('calculation');
    display();
}