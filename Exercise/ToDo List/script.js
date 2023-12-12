// To Do List in Dictionaries of Array. 
const todoList = [{
    name: 'Make Dinner',
    duedate: '2023-12-11'
}];
Listupdate()

//Function that display the to Do List.
function Listupdate() {
    let List = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoobject = todoList[i];
        /*
        const name = todoobject.name;
        const duedate = todoobject.duedate;
        */
        // Use destructive shorthand.
        const { name, duedate } = todoobject;
        const list = `
        <p>${name}  ${duedate}
        <button onclick=" 
        todoList.splice(${i},1)
        Listupdate()">Delete</button>
        </p>`;
        List += list;
    }
    console.log(List)
    document.querySelector('.js-list').innerHTML = List;
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
    }
    inputtask.value = '';
    inputdate.value = '';
    console.log(todoList);
    Listupdate();
}