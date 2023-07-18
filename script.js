// Get references to the input and button elements
var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");

// Add event listener to the button
addTaskBtn.addEventListener("click", function() {
  var taskText = taskInput.value;
  if (taskText.trim() !== "") {
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", toggleTask);
    taskItem.innerHTML += '<button class="delete-btn">X</button>';
    taskItem.classList.add(getPriorityClass());
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

// Function to toggle the completed class on a task item
function toggleTask() {
  this.classList.toggle("completed");
}

// Event delegation to handle delete button clicks
taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    var taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
  }
});

// Function to get the priority class based on user input
function getPriorityClass() {
  var priority = prompt("Enter task priority (high, medium, low):");
  var priorityClass = "";
  switch (priority) {
    case "high":
      priorityClass = "priority-high";
      break;
    case "medium":
      priorityClass = "priority-medium";
      break;
    case "low":
      priorityClass = "priority-low";
      break;
    default:
      priorityClass = "";
      break;
  }
  return priorityClass;
}
