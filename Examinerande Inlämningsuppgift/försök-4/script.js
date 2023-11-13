const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    errorMsg.style.display = "block";
    return;
  }
  else{
    errorMsg.style.display = "none";
  }
  const taskItem = document.createElement("li");
  const taskCheckbox = document.createElement("input");
  const taskText = document.createElement("span");
  const taskDeleteBtn = document.createElement("button");

  taskCheckbox.type = "checkbox";
  taskText.innerText = task;
  taskDeleteBtn.innerText = "Delete";

  taskDeleteBtn.addEventListener("click", deleteTask);

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(taskDeleteBtn);

  taskList.appendChild(taskItem);

  taskInput.value = "";
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}