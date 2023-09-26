const taskform = document.getElementById("task-form");
const taskinput = document.getElementById("task-input");
const tasklist = document.getElementById("task-list");

function Handlesubmit() {
    const taskText = taskinput.value.trim();

    if(taskText !== '') {
        addTask(taskText)
        taskinput.value = '',
        taskinput.focus()
    } else{
        alert('Please, fill in the input field')
    };
};

function addTask(text) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `${text}
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>`;
    tasklist.appendChild(taskItem)
}