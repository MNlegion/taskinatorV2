var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name=task-type]").value;
  
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  
  // create a div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");

  // give the div created above a class name upon creation
  taskInfoEl.className = "task-info";

  // add HTML content to the div created
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to the list
  tasksToDoEl.appendChild(listItemEl);

  console.dir(listItemEl);

};

formEl.addEventListener("submit", createTaskHandler);
