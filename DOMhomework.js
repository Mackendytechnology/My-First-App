let toDoItems = [];

const spanElement = document.querySelector("#createdBy");
spanElement.innerHTML += "Mackendy Bouquet";

function ToDo(description) {
  this.description = description;
  this.complete = false;
}

ToDo.prototype.completeTodo = function () {
  this.complete = true;
};

function buildTodo(todo, index) {
  const todoShell = document.createElement("div");
  todoShell.className = "toDoShell";

  const todoText = document.createElement("span");
  todoText.innerHTML = todo.description;
  todoText.id = index;
  todoText.addEventListener("click", completeTodo);

  if (todo.complete) {
    todoText.className = "completeText";
  }

  todoShell.appendChild(todoText);

  return todoShell;
}

function buildTodos(todos) {
  return todos.map(buildTodo);
}

function displayToDos() {
  let toDoContainer = document.getElementById("toDoContainer");
  toDoContainer.innerHTML = "";

  let build = buildTodos(toDoItems);

  for (let i = 0; i < build.length; i++) {
    toDoContainer.appendChild(build[i]);
  }
}

function addTodo() {
  let inputValue = document.querySelector("#toDoInput").value;
  let newTodo = new ToDo(inputValue);
  toDoItems.push(newTodo);
  displayToDos();
}

let toDoButton = document.querySelector("#addButton");
toDoButton.addEventListener("click", addTodo);

function completeTodo(event) {
  const index = event.target.id;
  toDoItems[index].completeTodo();
  displayToDos();
}
