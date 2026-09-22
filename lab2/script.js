
let tasks = [];

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');

function renderTasks(tasksToRender) {
    taskList.innerHTML = '';

    tasksToRender.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        alert('Введите задачу!');
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text
    };

    tasks.push(newTask);

    taskInput.value = '';

    renderTasks(tasks);
}

addBtn.addEventListener('click', addTask);

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    renderTasks(tasks);
}

searchInput.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();

    // Фильтруем задачи
    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchText)
    );

    renderTasks(filteredTasks);
});
