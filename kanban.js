var newTask = document.getElementById("new-task");
var newTaskBtn = document.getElementById("new-task-btn");
var toDo = document.getElementById("to-do");

newTask.addEventListener("submit", function(e) {

    var newTaskInput = document.getElementById("new-task-input").value;

    //Prevents refresh and loss of todos
    e.preventDefault();
    toDo.append(newTaskInput);

});