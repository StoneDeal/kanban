var newTask = document.getElementById("new-task");
var newTaskBtn = document.getElementById("new-task-btn");
var toDos = document.getElementById("to-dos");

newTask.addEventListener("submit", function(e) {

    var newTaskInput = document.getElementById("new-task-input").value;

    //Prevents refresh and loss of todos
    e.preventDefault();
    toDos.innerHTML += ("<div id='to-do'><button>" + newTaskInput + "</button></div>");
    
    var toDo = document.getElementById("to-do");
    toDo.addEventListener("click", function () {
        toDo.id = "in progress";
    });

});

