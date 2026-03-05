let tasks = ["Drink Chai", "Learn JS"];

const addBtn = document.getElementById("addBtn");
const inputField = document.querySelector("#inputArea");
const todoList = document.querySelector(".todoList");

// jo bhi array me haii, usko screen par showw karo
function renderOnScreen() {
  console.log(tasks);
  tasks.forEach((taskText, idx) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");

    const li = document.createElement("li");
    li.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("index", idx);

    div.append(li, deleteBtn);
    todoList.append(div);
  });
}

addBtn.addEventListener("click", () => {
  const val = inputField.value.trim();
  if (val === "") return;

  tasks.push(val);
  // console.log(tasks)
  renderOnScreen();
  inputField.value = "";
});
inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    let idx = e.target.getAttribute("index");
    tasks.splice(idx, 1);
    renderOnScreen();
  }
});

renderOnScreen();
