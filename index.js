function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    if (todoInput.value.trim() === "") return;
  
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.innerText = todoInput.value;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#ffffff">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z" opacity=".3"/>
        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4h-4.5zM8 9v10h8V9H8z"/>
      </svg>
    `;
    deleteBtn.onclick = function () {
      todoList.removeChild(todoItem);
    };
  
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
  