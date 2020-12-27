// GLOBAL VARIABLES
let storage;
let list = "";
let task;
let tasks = [];

// GET THE DOM ELEMENTS
let $ = function (id) {
    return document.getElementById(id);
};

// DISPLAY THE TASK LIST
let displayTaskList = function () {
    if (tasks.length === 0) {
        storage = localStorage.getItem("tasks") || "";

        if (storage.length > 0) {
            tasks = storage.split("|");
        }
    }

    if(tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n");
    }

    $("task_list").value = list;
};

// ADD A TASK
let addToTaskList = function () {
    task = $("task");
    if (task.value === "") {
        window.alert("Please enter a task");
    } else {
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");

        task.value = "";
        displayTaskList();
    }
};

// CLEAR TASK LIST
let clearTaskList = function () {
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
}

// WIRE UP EVENTS AND DISPLAY THE TASK LIST
window.addEventListener("load", function () {
   $("add_task").addEventListener("click", addToTaskList);
   $("clear_tasks").addEventListener("click", clearTaskList);
    displayTaskList();
});
