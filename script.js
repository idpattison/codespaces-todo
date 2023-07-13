// Get DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Create an empty array to store todos
let todos = [];

// Function to render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            toggleTodoCompleted(index);
        });

        const label = document.createElement('label');
        label.innerText = todo.title;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteTodo(index);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteBtn);

        todoList.appendChild(listItem);
    });
}

// Function to add a new todo
function addTodo() {
    const title = todoInput.value.trim();

    if (title !== '') {
        const todo = {
            title: title,
            completed: false
        };

        todos.push(todo);
        todoInput.value = '';
        renderTodos();
    }
}

// Function to toggle the completed state of a todo
function toggleTodoCompleted(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Event listener for the add button
addBtn.addEventListener('click', addTodo);

// Initial render
renderTodos();
