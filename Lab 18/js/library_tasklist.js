/*eslint-env browser*/

let taskList = {
    tasks: [],
    storage: getTaskStorage("tasks_11_1"),
    displayDiv: null,
    deleteClickHandler: null,

    load: function () {
        if (this.tasks.length === 0) {
            taskList.task = this.storage.get();
        }
    },

    save: function () {
        this.storage.set(this.tasks);
    },

    sort: function () {
        this.tasks.sort();
    },

    add: function (task) {
        this.tasks.push(task.toString());
    },

    deleteTask: function (i) {
        this.sort();
        this.tasks.splice(i, 1);
    },

    clear: function () {
        this.tasks.length = 0;
        this.storage.clear();
        this.displayDiv.innerHTML = "";
    },

    display: function () {
        let html = "", i, links;
        this.sort();
        for (i in this.tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' title='", i, "'>Delete</a>");
            html = html.concat(this.tasks[i]);
            html = html.concat("</p>");
        }
        this.displayDiv.innerHTML = html;
        links = this.displayDiv.getElementsByTagName("a");
        for (i = 0; i < links.length; i += 1) {
            if (links[i].innerHTML === "Delete") {
                links[i].onclick = this.deleteClickHandler;
            }
        }
    }
};
