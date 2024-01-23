var todoList = [];
document.onload = function () {
  var data = localStorage.getItem("todo_list");
  if (data) {
    data = JSON.parse(data);
    for (var j = 0; j < data.length; j++) {
      var todo = data[j];
      addTodo(todo.title, todo.description, todo.id);
    }
  }
};

function Todo(title, description, id) {
  this.title = title;
  this.description = description;
  this.id = id;
}

function add() {
  var title = document.getElementById("title").value;
  var desc = document.getElementById("description").value;
  var id = "id" + new Date().getTime();
  addTodo(title, desc, id);
}

function addTodo(title, desc, id) {
  var todo = new Todo(title, desc, id);
  todoList.push(todo);
  var ul = document.getElementById("todo_list");
  var li = document.createElement("li");
  li.setAttribute("index", id);
  li.innerText = todo.title + " : " + todo.description;
  var btn = document.createElement("button");
  btn.innerText = "remove";
  btn.onclick = removeTodo;
  li.appendChild(btn);
  ul.appendChild(li);
  saveToMemory();
}

function removeTodo(e) {
  var btn = e.target;
  var li = btn.parentNode;
  var ul = document.getElementById("todo_list");
  var index = li.getAttribute("index");
  todoList.splice(index, 1);
  ul.removeChild(li);
  saveToMemory();
}

function saveToMemory() {
  var str = JSON.stringify(todoList);
  localStorage.setItem("todo_list", str);
}
