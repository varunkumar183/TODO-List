const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const errorMsg = document.getElementById('errorMsg');
// Local Storage key
const STORAGE_KEY = 'todo-tasks';
// Load tasks from local storage (returns empty array if nothing saved)
function loadTasks() {
try {
const tasksJSON = localStorage.getItem(STORAGE_KEY);
return tasksJSON ? JSON.parse(tasksJSON) : [];
} catch (e) {
return [];
}
}
// Save tasks to local storage
function saveTasks(tasks) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
// Render all tasks in the DOM (clears and reloads)
function renderTasks() {
taskList.innerHTML = '';
const tasks = loadTasks();
tasks.forEach((task, i) => {
const taskItem = document.createElement('li');
taskItem.classList.add('task-item');
if (task.completed) taskItem.classList.add('completed');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = task.completed;
checkbox.addEventListener('change', () => {
tasks[i].completed = checkbox.checked;
saveTasks(tasks);
renderTasks();
});
const taskName = document.createElement('span');
taskName.textContent = task.name;
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.classList.add('delete-btn');
deleteButton.addEventListener('click', () => {
tasks.splice(i, 1);
saveTasks(tasks);
renderTasks();
});
taskItem.appendChild(checkbox);
taskItem.appendChild(taskName);
taskItem.appendChild(deleteButton);
taskList.appendChild(taskItem);
});
}
// Show error message
function showError(msg) {
errorMsg.textContent = msg;
setTimeout(() => {
errorMsg.textContent = '';
}, 2000);
}
// Add new task
function addTask() {
const taskText = taskInput.value.trim();
if (taskText === "") {
showError("Please enter a task!");
return;
}
const tasks = loadTasks();
tasks.push({ name: taskText, completed: false });
saveTasks(tasks);
renderTasks();
taskInput.value = '';
}
// Add task on button click
addTaskButton.addEventListener('click', addTask);
// Add task on Enter key
taskInput.addEventListener('keydown', function(e) {
if (e.key === 'Enter') addTask();
});
// Initial render
document.addEventListener('DOMContentLoaded', renderTasks);
