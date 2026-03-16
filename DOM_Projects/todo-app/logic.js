export function renderOnScreen(tasks, todoList) {

  todoList.replaceChildren();

  if (tasks.length === 0) {
    const message = document.createElement("p");
    message.innerText = "Todo list is empty";
    todoList.append(message);
    return;
  }

  tasks.forEach((task, index) => {
    addTodoToDOM(task, index, todoList);
  });

}


export function addTodoToDOM(todo, index, todoList) {

  const li = document.createElement("li");
  li.dataset.index = index;

  const text = document.createElement("span");
  text.innerText = todo;
  text.classList.add("todoText");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteBtn");

  li.append(text, deleteBtn);

  todoList.append(li);
}