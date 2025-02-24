function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") { // Trim to remove whitespace-only input
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Delete</button>`;
    
    taskList.appendChild(li); // Add the new task to the list
    taskInput.value = ""; // Clear input field
}

function removeTask(button) {
    button.parentElement.remove(); // Remove the task when button is clicked
}
