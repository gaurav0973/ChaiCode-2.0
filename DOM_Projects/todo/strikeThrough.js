let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

const addBtn = document.getElementById("addBtn");
const inputField = document.querySelector("#inputArea");
const todoList = document.querySelector(".todoList");

// jo bhi array me haii, usko screen par showw karo
function renderOnScreen() {
  todoList.innerHTML = ""; //BUG-FIX: clear the canva
  // console.log(tasks);
  localStorage.setItem("myTasks", JSON.stringify(tasks));

  if (tasks.length === 0) {
    const message = document.createElement("p");
    message.innerText = "No tasks yet! Time to add some ☕";
    message.style.textAlign = "center";
    message.style.color = "#8b5a2b";
    message.style.marginTop = "20px";
    todoList.append(message);
    return;
  }
  tasks.forEach((taskText, idx) => {
    const div = document.createElement("div");
    div.classList.add("todo-item");

    const li = document.createElement("li");
    li.innerText = taskText.text;
    li.setAttribute("data-index", idx);

    if (taskText.completed) {
      li.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("data-index", idx);

    div.append(li, deleteBtn);
    todoList.append(div);
  });
}

addBtn.addEventListener("click", () => {
  const val = inputField.value.trim();
  if (val === "") return;

  tasks.push({ text: val, completed: false });
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
  // console.log(e)
  if (e.target.classList.contains("delete-btn")) {
    let idx = e.target.getAttribute("data-index");
    tasks.splice(idx, 1);
    renderOnScreen();
  }
  console.log(e.target.tagName)
  if (e.target.tagName === "LI") {
    const idx = e.target.getAttribute("data-index");
    tasks[idx].completed = !tasks[idx].completed;
    renderOnScreen();
  }
});

// todoList.addEventListener("dblclick", (e)=>{
//   console.log(e.target.tagName)
  
// })

renderOnScreen();

/*
-------------Local Storage-----------------
// add/isme hi override kar deta hai 
localStorage.setItem("fName", "Gaurav")
localStorage.setItem("mName", "Kumar")
localStorage.setItem("lName", "Maurya")

// get item
const fName = localStorage.getItem("fName")
console.log("First name: ",fName)

// delete/remove
localStorage.removeItem("mName")

// clear all items
localStorage.clear()
*/
