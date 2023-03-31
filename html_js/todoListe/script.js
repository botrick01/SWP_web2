let todos = [];

function addTodo() {
  let todo = {
    id: todos.length,
    title: document.getElementById("input").value,
    done: false,
  };
  todos.push(todo);
  loadTodos();
}

function toggledone(id) {
  todos[id].done = !todos[id].done;
  loadTodos();
}

function loadTodos() {
  let html = "";
  todos.forEach((todo) => {
    if (todo.done) {
      html +=
        "<div class='todo' done> <input class='checkbox' checked type='checkbox' onclick='toggledone(" +
        todo.id +
        ")'> <div>" +
        todo.title +
        "</div> <img src='pictures/trash.png' alt='delete' onClick='deleteTodo("+todo.id+")'> </div>";
    } else {
      html +=
        "<div class='todo'> <input class='checkbox' type='checkbox' onclick='toggledone(" +
        todo.id +
        ")'> </input><div>" +
        todo.title +
        " </div> <img src='pictures/trash.png' alt='delete' onClick='deleteTodo("+todo.id+")'> </div>";
    }
  });
  document.getElementById("todos").innerHTML = html;
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id != id);
    loadTodos();
}