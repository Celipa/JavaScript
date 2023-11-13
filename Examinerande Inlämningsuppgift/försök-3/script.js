const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');
let tasks = [];

// Add task to list
function addTask(task) {
  tasks.push(task);
  renderTasks();
}

// Remove task from list
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
      removeTask(index);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Add task when button is clicked
document.querySelector('#add-task').addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    addTask(task);
    taskInput.value = '';
  }
});

document.querySelector('#add-task').addEventListener('', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
      addTask(task);
      taskInput.value = '';
    }
  });
// Add task when Enter key is pressed
taskInput.addEventListener('#add-task', (event) => {
  if (event.key === 'Enter') {
    const task = taskInput.value.trim();
    if (task !== '') {
      addTask(task);
      taskInput.value = '';
    }
  }
});