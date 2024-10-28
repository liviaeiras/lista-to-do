const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const completedCount = document.getElementById("completed-count");

function updateCounters() {
  const tasks = document.querySelectorAll("#task-list li");
  const completedTasks = document.querySelectorAll("#task-list li.completed");
  taskCount.textContent = `Tarefas: ${tasks.length}`;
  completedCount.textContent = `Concluídas: ${completedTasks.length}`;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.classList.add("task-content");

  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");

  const completeButton = document.createElement("button");
  completeButton.textContent = "✓";
  completeButton.onclick = () => toggleComplete(taskItem);

  const editButton = document.createElement("button");
  editButton.textContent = "✎";
  editButton.onclick = () => editTask(taskContent);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "✗";
  deleteButton.onclick = () => deleteTask(taskItem);

  taskButtons.appendChild(completeButton);
  taskButtons.appendChild(editButton);
  taskButtons.appendChild(deleteButton);

  taskItem.appendChild(taskContent);
  taskItem.appendChild(taskButtons);

  taskList.appendChild(taskItem);
  taskInput.value = "";
  updateCounters();
}

function toggleComplete(taskItem) {
  taskItem.classList.toggle("completed");
  updateCounters();
}

function editTask(taskContent) {
  const newTaskText = prompt("Edite sua tarefa:", taskContent.textContent);
  if (newTaskText !== null) {
    taskContent.textContent = newTaskText;
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
  updateCounters();
}

function clearCompleted() {
  const completedTasks = document.querySelectorAll("#task-list li.completed");
  completedTasks.forEach(task => task.remove());
  updateCounters();
}
