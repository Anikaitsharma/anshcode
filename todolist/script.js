const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const inputValue = inputBox.value.trim();
    if (inputValue === '') {
        alert("You must write something");
    } else {
        const li = document.createElement("li");
        li.textContent = inputValue;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

showTasks();