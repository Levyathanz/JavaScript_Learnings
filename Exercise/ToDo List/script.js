const todoList = [];
Listupdate();
function Listupdate() {
    let List = '';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const list = `<p>${todo}</p>`;
        List += list;
    }
    console.log(List)
    document.querySelector('.js-list').innerHTML = List;
}

function addlist() {
    const task = document.querySelector('.js-todo');
    todoList.push(task.value)
    task.value = '';
    console.log(todoList);
    Listupdate();
}