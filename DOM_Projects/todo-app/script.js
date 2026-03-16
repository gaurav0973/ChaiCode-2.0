/*
1. render on the screen
2. addTodo(todo)
    <div>
        <li>Item-1</li> 
        <button>Delete</button>   
    </div>
3. button ke click par, item added on the screen
4. list-items => delete button par click karne par , remove from dom
5. list-items => li par dbclick karne par, edit kar option aa jayega
*/

import { renderOnScreen } from "./logic.js";

const tasks = [];

const inputArea = document.getElementById("inputArea");
const addBtn = document.getElementById("addBtn");
const todoList = document.querySelector(".todoList");


renderOnScreen(tasks, todoList);


addBtn.addEventListener("click", () => {
    const value = inputArea.value.trim();
    
    if (!value) 
        return;

    tasks.push(value);

    renderOnScreen(tasks, todoList);

    inputArea.value = "";
});


inputArea.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});


todoList.addEventListener("click", function (e) {

    if (e.target.classList.contains("deleteBtn")) {

        const li = e.target.closest("li");
        const index = li.dataset.index;

        tasks.splice(index, 1);

        renderOnScreen(tasks, todoList);
    }

});


todoList.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("todoText")) {

        const li = e.target.closest("li");
        const index = li.dataset.index;

        const newValue = prompt("Edit your task:", tasks[index]);

        if (!newValue.trim()) 
            return;

        tasks[index] = newValue;

        renderOnScreen(tasks, todoList);
    }
    
});



