

function Todo(title, description) {
    this.title = title;
    this.description = description;
}

function addTodo() {
    var title = document.getElementById('title').value;
    var desc = document.getElementById('description').value;
    var todo = new Todo(title, desc);
    var ul = document.getElementById('todo_list');
    var li = document.createElement('li');
    li.innerText = todo.title + ' : ' + todo.description;
    var btn = document.createElement('button');
    btn.innerText = 'remove';
    btn.onclick = removeTodo;
    li.appendChild(btn);
    ul.appendChild(li);
}

function removeTodo(e) {
    var btn = e.target;
    var li = btn.parentNode;
    var ul = document.getElementById('todo_list');
    ul.removeChild(li);
}