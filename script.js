const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function displayTasks() {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const li = document.createElement("li");

        li.innerText = tasks[i].text;

        if (tasks[i].completed) {
            li.classList.add("completed");
        }

        const completeBtn = document.createElement("button");
        completeBtn.innerText = "Complete";

        completeBtn.onclick = function () {
            tasks[i].completed = !tasks[i].completed;
            displayTasks();
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.onclick = function () {
            tasks.splice(i, 1);
            displayTasks();
        };

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }
}

addBtn.onclick = function () {

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    taskInput.value = "";

    displayTasks();
};