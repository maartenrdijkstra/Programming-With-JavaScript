function displayMenu() {
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - show all employees");
    window.console.log("add - add an employee");
    window.console.log("del - delete an employee");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function display(employeeList) {
    let i = 1
    employeeList.forEach(function (employee) {
        console.log(String(i) + "." + employee);
        i += 1;
    });
    console.log("");
}

function add(employeeList) {
    let employee = window.prompt("Enter the employee's name");
    employeeList.push(employee);
    console.log(employee + " was added.<br>")
}

function del(employeeList) {
    let num, employee;
    num = parseInt(window.prompt("Employee number to delete"));
    if (num < 1 || num > employeeList.length) {
        alert("Invalid employee number");
    } else {
        employee = employeeList.splice(num - 1, 1);
        console.log(employee + " was deleted.<br>");
    }
}

function main() {
    let employeeList, command;

    displayMenu();

    employeeList = ["Zak Ruvalcaba", "Sally Smith", "Frank Franklin", "John Smith", "Jane Doe"];

    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(employeeList);
            } else if (command === "add") {
                add(employeeList);
            } else if (command === "del") {
                del(employeeList);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command")
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated")
}

main();
