
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
      <span>${task}</span>
      <div>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
    todoInput.value = ''; 
    li.querySelector('.complete-btn').addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });
  }
});
