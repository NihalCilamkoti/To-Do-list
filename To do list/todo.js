
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function createTask(taskText) 
{
    const li = document.createElement('li');
    // for checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // for span
    const span = document.createElement('span');
    span.textContent = taskText;
    // for deleting
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    taskList.appendChild(li);

    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(deleteButton);
}

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});

addTaskButton.addEventListener('click', function ()
{
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = ''; 
    } else {
        alert('Please enter a task!');
    }
});