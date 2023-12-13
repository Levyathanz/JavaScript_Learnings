// Adding EventListener.
document.querySelector('.js-btn').addEventListener('click', () => addlist());

// To Do List in Dictionaries of Array. 
const todoList = JSON.parse(localStorage.getItem('TodoList')) || [];
Listupdate();

//Function that display the to Do List.
function Listupdate() {
    let List = '';
    todoList.forEach((todoobject) => {
        const { name, duedate } = todoobject;
        const list = `
        <div>${name}</div>
        <div>${duedate}</div>
        <button class="js-red-btn js-delete-btn">Delete</button>`;
        List += list;
        //console.log(List)
    });
    document.querySelector('.js-list').innerHTML = List;

    document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            localStorage.removeItem('TodoList');
            Listupdate()
        })
    })
}

// Function that add to Do List into the Array.
function addlist() {
    const inputtask = document.querySelector('.js-todo');
    const inputdate = document.querySelector('.js-duedate');
    document.querySelector('.js-error').innerHTML = '';
    if (!inputtask.value || !inputdate.value) {
        document.querySelector('.js-error').innerText = "There is Nothing to Do or No duedate is specified."
    } else {
        todoList.push({
            name: inputtask.value,
            duedate: inputdate.value
        });
        inputtask.value = '';
        inputdate.value = '';
    }
    localStorage.setItem('TodoList', JSON.stringify(todoList));
    // console.log(todoList);
    Listupdate();
}