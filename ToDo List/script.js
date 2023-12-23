// Adding EventListener.
document.querySelector('.js-btn').addEventListener('click', () => addlist());

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addlist()
    }
})

// To Do List in Dictionaries of Array. 
const todoList = JSON.parse(localStorage.getItem('TodoList')) || [];
Listupdate();

// Function that displays the to-do list.
function Listupdate() {
    let List = '';
    todoList.forEach((todoobject, index) => {
        const { name, duedate, checked } = todoobject;
        const list = `
        <div><input class="js-check " type="checkbox" ${checked ? 'checked' : ''} data-index="${index}"/></div>
        <div class="task-js ${checked ? 'checked' : ''}">${name}</div>
        <div class="task-js ${checked ? 'checked' : ''}">${duedate}</div>
        <button class="js-red-btn js-delete-btn">Delete</button>`;
        List += list;
    });
    document.querySelector('.js-list').innerHTML = List;

    document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            localStorage.setItem('TodoList', JSON.stringify(todoList));
            Listupdate();
        });
    });

    // Function that marks completed.
    document.querySelectorAll('.js-check').forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
            const index = event.target.dataset.index;
            todoList[index].checked = event.target.checked;
            localStorage.setItem('TodoList', JSON.stringify(todoList));
            Listupdate();
        });
    });
}

// Function that adds a to-do item to the List.
function addlist() {
    const inputtask = document.querySelector('.js-todo');
    const inputdate = document.querySelector('.js-duedate');
    document.querySelector('.js-error').innerHTML = '';
    if (!inputtask.value || !inputdate.value) {
        document.querySelector('.js-error').innerText = "There is Nothing to Do or No due date is specified.";
    } else {
        todoList.push({
            name: inputtask.value,
            duedate: inputdate.value,
            checked: false
        });
        inputtask.value = '';
        inputdate.value = '';
    }
    localStorage.setItem('TodoList', JSON.stringify(todoList));
    Listupdate();
}

document.addEventListener('DOMContentLoaded', () => {
    Listupdate();
});
