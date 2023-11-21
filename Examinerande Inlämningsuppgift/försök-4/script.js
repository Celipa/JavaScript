//importera variabler från html koden
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
//lägg till funktion till addtaskbtn
addTaskBtn.addEventListener("click", addTask);
//när du trycker add task..
function addTask() {
  const task = taskInput.value.trim();
//kolla om textfältet är tomt, om det är tomt, visa error meddelandet
  if (task === "") {
    errorMsg.style.display = "block";
    return;
  }
  //om textfältet inte är tomt, ta bort errormeddelandet.
  else{
    errorMsg.style.display = "none";
  }
  //lägg till de olika element i varje to-do (så det ses som en lista, har en checkbox, är text och har ta bort )
  const taskItem = document.createElement("li");
  const taskCheckbox = document.createElement("input");
  const taskText = document.createElement("span");
  const taskDeleteBtn = document.createElement("button");
//en task del ska innehålla..
  taskCheckbox.type = "checkbox";
  taskText.innerText = task;
  taskDeleteBtn.innerText = "Delete";
//delete knappen ska ta bort..
  taskDeleteBtn.addEventListener("click", deleteTask);
//dessa delar av en task.
  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(taskDeleteBtn);

  taskList.appendChild(taskItem);
//och ersätta de med..
  taskInput.value = "";
}
//delete knappen gör detta.
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}
GetRequest('GET', 'data.json', (data) => {
  console.log(data)
})