const tasks = [];

const addBtn = document.getElementById("addBtn");
const inputField = document.querySelector("#inputArea");
const todoList = document.querySelector(".todoList");

addBtn.addEventListener("click", function () {
  const val = inputField.value.trim();
  if (val === "") return;

  const div = document.createElement("div");
  // classname abhi hi de du, baaad me styling karne me aasani hogi
  div.classList.add("todo-item");

  const li = document.createElement("li");
  li.innerText = val;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  // classname => isi time de do, baad me styling me help hogi
  deleteBtn.classList.add("delete-btn");

  div.append(li);
  div.append(deleteBtn);
  tasks.push(div);
  // todoList.append(div);

  inputField.value = "";
});
inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

todoList.addEventListener("click", function (e) {
  // console.log(e)
  // console.log(e.target.parentElement)
  // console.log(e.target.classList)
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
