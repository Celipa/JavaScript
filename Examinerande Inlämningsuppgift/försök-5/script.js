const taskList = document.getElementById('task-list');
    const addTaskForm = document.getElementById('add-task-form');
    const newTaskInput = document.getElementById('new-task-input');
    const dbUrl = 'http://localhost:3000/tasks';

    // Fetch tasks from db.json and display them on the page
    fetch(dbUrl)
      .then(response => response.json())
      .then(tasks => {
        tasks.forEach(task => {
          const taskItem = document.createElement('li');
          const taskCheckbox = document.createElement('input');
          taskCheckbox.type = 'checkbox';
          taskCheckbox.checked = task.completed;
          taskCheckbox.addEventListener('change', () => {
            // Update the completed property of the task in db.json
            fetch(`${dbUrl}/${task.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                completed: taskCheckbox.checked
              })
            })
              .then(response => response.json())
              .then(updatedTask => {
                task.completed = updatedTask.completed;
              })
              .catch(error => console.error(error));
          });
          const taskTitle = document.createElement('span');
          taskTitle.textContent = task.title;
          const taskDeleteButton = document.createElement('button');
          taskDeleteButton.textContent = 'Delete';
          taskDeleteButton.addEventListener('click', () => {
            // Remove the task from db.json and the page
            fetch(`${dbUrl}/${task.id}`, {
              method: 'DELETE'
            })
              .then(() => {
                taskList.removeChild(taskItem);
              })
              .catch(error => console.error(error));
          });
          const taskEditButton = document.createElement('button');
          taskEditButton.textContent = 'Edit';
          taskEditButton.addEventListener('click', () => {
            // Display a form to edit the task title
            const taskEditForm = document.createElement('form');
            const taskEditInput = document.createElement('input');
            taskEditInput.type = 'text';
            taskEditInput.value = task.title;
            const taskEditSubmitButton = document.createElement('button');
            taskEditSubmitButton.type = 'submit';
            taskEditSubmitButton.textContent = 'Save';
            taskEditForm.appendChild(taskEditInput);
            taskEditForm.appendChild(taskEditSubmitButton);
            taskItem.replaceWith(taskEditForm);
            taskEditForm.addEventListener('submit', event => {
              event.preventDefault();
              // Update the title property of the task in db.json and the page
              fetch(`${dbUrl}/${task.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  title: taskEditInput.value
                })
              })
                .then(response => response.json())
                .then(updatedTask => {
                  task.title = updatedTask.title;
                  taskTitle.textContent = task.title;
                  taskEditForm.replaceWith(taskItem);
                })
                .catch(error => console.error(error));
            });
          });
          taskItem.appendChild(taskCheckbox);
          taskItem.appendChild(taskTitle);
          taskItem.appendChild(taskDeleteButton);
          taskItem.appendChild(taskEditButton);
          taskList.appendChild(taskItem);
        });
      })
      .catch(error => console.error(error));

    // Add a new task to db.json and the page
    addTaskForm.addEventListener('submit', event => {
      event.preventDefault();
      const newTaskTitle = newTaskInput.value.trim();
      if (newTaskTitle) {
        fetch(dbUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: newTaskTitle,
            completed: false
          })
        })
          .then(response => response.json())
          .then(newTask => {
            const taskItem = document.createElement('li');
            const taskCheckbox = document.createElement('input');
            taskCheckbox.type = 'checkbox';
            taskCheckbox.checked = newTask.completed;
            taskCheckbox.addEventListener('change', () => {
              // Update the completed property of the task in db.json
              fetch(`${dbUrl}/${newTask.id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  completed: taskCheckbox.checked
                })
              })
                .then(response => response.json())
                .then(updatedTask => {
                  newTask.completed = updatedTask.completed;
                })
                .catch(error => console.error(error));
            });
            const taskTitle = document.createElement('span');
            taskTitle.textContent = newTask.title;
            const taskDeleteButton = document.createElement('button');
            taskDeleteButton.textContent = 'Delete';
            taskDeleteButton.addEventListener('click', () => {
              // Remove the task from db.json and the page
              fetch(`${dbUrl}/${newTask.id}`, {
                method: 'DELETE'
              })
                .then(() => {
                  taskList.removeChild(taskItem);
                })
                .catch(error => console.error(error));
            });
            const taskEditButton = document.createElement('button');
            taskEditButton.textContent = 'Edit';
            taskEditButton.addEventListener('click', () => {
              // Display a form to edit the task title
              const taskEditForm = document.createElement('form');
              const taskEditInput = document.createElement('input');
              taskEditInput.type = 'text';
              taskEditInput.value = newTask.title;
              const taskEditSubmitButton = document.createElement('button');
              taskEditSubmitButton.type = 'submit';
              taskEditSubmitButton.textContent = 'Save';
              taskEditForm.appendChild(taskEditInput);
              taskEditForm.appendChild(taskEditSubmitButton);
              taskItem.replaceWith(taskEditForm);
              taskEditForm.addEventListener('submit', event => {
                event.preventDefault();
                // Update the title property of the task in db.json and the page
                fetch(`${dbUrl}/${newTask.id}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    title: taskEditInput.value
                  })
                })
                  .then(response => response.json())
                  .then(updatedTask => {
                    newTask.title = updatedTask.title;
                    taskTitle.textContent = newTask.title;
                    taskEditForm.replaceWith(taskItem);
                  })
                  .catch(error => console.error(error));
              });
            });
            taskItem.appendChild(taskCheckbox);
            taskItem.appendChild(taskTitle);
            taskItem.appendChild(taskDeleteButton);
            taskItem.appendChild(taskEditButton);
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
          })
      }
    }
    )