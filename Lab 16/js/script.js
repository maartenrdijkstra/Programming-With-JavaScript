/*eslint-env global*/

let $ = function (id) {
    return document.getElementById(id);
};

let calculateDays = function () {
    let event, dt, year, date, today, oneDay, days;

    event = $("event").value;
    dt = $("date").value;

    // MAKE SURE THAT EVENT NAME AND DATE ARE ENTERED
    if (event.length === 0 || dt.length === 0) {
        $("message").innerHTML = "Please enter both a name and a date."
        return;
    }
    // MAKE SURE EVENT DATE HAS SLASHES AND A 4-DIGIT YEAR
    if (dt.indexOf("/") === -1) {
        $("message").innerHTML = "Please enter the date in MM/DD/YYYY format.";
        return;
    }
    year = dt.substring(dt.length - 4);
    if (isNaN(year)) {
        $("message").innerHTML("Please enter the date in MM/DD/YYYY format.");
        return;
    }
    date = new Date(dt);
    if (date === "Invalid Date") {
        $("message").innerHTML("Please enter the date in MM/DD/YYYY format.");
        return;
    }

    // CALCULATE DAYS
    today = new Date();
    oneDay = 24 * 60 * 60 * 1000; // HOURS * MIN * SEC * MS
    days = (date.getTime() - today.getTime()) / oneDay;
    days = Math.ceil(days);

    //CREATE AND DISPLAY THE MESSAGE
    if (days === 0) {
        $("message").innerHTML = "Hooray! Today is ".concat(event.toLowerCase(), "!\n(", date.toDateString(), ")");
    }
    if (days < 0) {
        event = event.substring(0,1).toUpperCase() + event.substring(1);
        $("message").innerHTML = event.concat(" happened! ", String(Math.abs(days)), " day(s) ago. ", date.toDateString(), ")");
    }
    if (days > 0) {
        $("message").innerHTML = days.toString().concat(" day(s) until ", event.toLowerCase(), "! (", date.toDateString(), ")");
    }
};

window.addEventListener("load", function () {
    $("countdown").addEventListener("click", calculateDays);
    $("event").focus();
});
