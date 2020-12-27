/*eslint-env browser*/

let $ = function (id) {
    return document.getElementById(id);
};

let addToTaskList = function () {
    let newTask, taskTextBox;

    taskTextBox = $("task");
    newTask = new Task(taskTextBox.value);
    if (newTask.isValid()) {
        taskList.add(newTask);
        taskList.save();
        taskList.display();
        taskTextBox.value = "";
    } else {
        window.alert("Please enter a task")
    }
    taskTextBox.focus();
};

let clearTaskList = function () {
    taskList.clear();
    $("task").focus();
};

let deleteFromTaskList = function () {
    taskList.deleteTask(this.title);
    taskList.save();
    taskList.display();
    $("task").focus();
};

window.addEventListener("load", function () {
    $("add_task").addEventListener("click", addToTaskList);
    $("clear_tasks").addEventListener("click", clearTaskList);

    taskList.displayDiv = $("tasks");
    taskList.deleteClickHandler = deleteFromTaskList;

    taskList.load();
    taskList.display();

    $("task").focus();
});
