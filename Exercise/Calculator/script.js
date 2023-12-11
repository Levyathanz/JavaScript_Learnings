let calculation = localStorage.getItem('calculation') || ``;
display();

function updateCalculation(value) {
    calculation += value;
    display();
}
function display() {
    const monitor = document.querySelector('.monitor')
    monitor.value = `${calculation}`
}
function Clear() {
    calculation = '';
    localStorage.removeItem('calculation');
    display();
}