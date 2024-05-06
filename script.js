// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    var timeInput = document.getElementById("timeInput").value;
    
    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    
    // Create timestamp
    var now = new Date();
    var timestamp = now.toLocaleString('en-US', { hour12: true });

    // Append task, time, and timestamp to list item
    li.appendChild(document.createTextNode(taskInput + " (Due: " + timeInput + ") - Added: " + timestamp));
    ul.appendChild(li);

    // Reset input fields after adding task
    document.getElementById("taskInput").value = "";
    document.getElementById("timeInput").value = "";

    // Add event listener to mark task as completed when clicked
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Add delete button to remove task
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);

    // Add event listener to delete button
    deleteBtn.addEventListener("click", function() {
        ul.removeChild(li);
    });
}
