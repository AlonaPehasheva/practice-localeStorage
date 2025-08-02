import { nanoid } from 'nanoid';
import { createMarkUpTask } from './markup-tasks';
const form = document.querySelector('.header-form');
const ulEl = document.querySelector('.tasks-list');
const tasks = initTasks();
form.addEventListener('submit', e => {
  e.preventDefault();
  const title = e.target.elements.taskName.value.trim();
  const description = e.target.elements.taskDescription.value.trim();
  const newTask = {
    title,
    description,
    id: nanoid(),
  };
  const markUp = createMarkUpTask(newTask);
  ulEl.insertAdjacentHTML('beforebegin', markUp);
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(markUp);
});
function initTasks(params) {
  const saveData = localStorage.getItem('tasks');
  if (saveData) {
    return JSON.parse(saveData);
  }
  return [];
}

function renderTasks(tasks) {
  const newMarkUp = tasks.map(createMarkUpTask).join('');
  ulEl.insertAdjacentHTML('beforebegin', newMarkUp);
}

renderTasks(tasks);
