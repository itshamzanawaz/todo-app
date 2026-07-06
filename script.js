// Getting the elements from the DOM
// using there IDs and storing them in variables for later use.
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Create a array to store each tasks.
// So, we can display them later and also perform operations like complete and delete.
let tasks = [];

function displayTasks() {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        const li = document.createElement("li"); // Create a new list item for each task
        const span = document.createElement("span"); // Create a span for the task text
        span.innerText = tasks[i].text; // Add the task text to the span

        if (tasks[i].completed) // If completed is true, add the completed class
        {
            span.classList.add("completed");
        }
        
        li.appendChild(span); // Add the span to the list item

        const completeBtn = document.createElement("button"); // Creating the Complete button for each task
        completeBtn.innerText = "Complete"; // Add text to the button

        completeBtn.onclick = function () { // Run this function when the Complete button is clicked
            tasks[i].completed = !tasks[i].completed; // Toggle completed: false → true, true → false
            displayTasks(); // Refresh the task list to show the updated status
        };

        const deleteBtn = document.createElement("button"); // Creating the Delete button for each task
        deleteBtn.innerText = "Delete"; // Add text to the button

        deleteBtn.onclick = function () { 
            tasks.splice(i, 1); // Remove 1 task at index i
            displayTasks(); // Redraw the task list after deletion
        };

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }
}

addBtn.onclick = function () {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    taskInput.value = "";

    displayTasks();
};