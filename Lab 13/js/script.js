let $ = function (id) {
    return document.getElementById(id)
};

let processEntries = function () {
    let header = "", html = "", required, msg, email, phone, country, contact, terms
    required = "<span>Required field</span>";
    msg = "Please review your entries and complete all required fields.";
    email = $("email_address").value;
    phone = $("phone").value;
    country = $("country").value;
    contact = "Text";

    if ($("email").checked) {
        contact = "Email";
    }
    if ($("none").checked) {
        contact = "None";
    }
    terms = $("terms").checked;
    if (email === "") {
        email = required;
        header = msg;
    }
    if (phone === "") {
        phone = required;
        header = msg;
    }
    if (country === "") {
        country = required;
        header = msg;
    }
    $("registration_header").innerHTML = header;

    if (header === msg) {
        html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
        html = html + "<tr><td>Country:</td><td>" + country + "</td></tr>";
        html = html + "<tr><td>Contact:</td><td>" + contact + "</td></tr>";
        html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
        $("registration_form").submit();
    }

};

let resetForm = function () {
    $("registration_form").reset();
    $("registration_header").innerHTML = "";
    $("registration_info").innerHTML = "";
    $("email_address").focus();

};

window.addEventListener("load", function () {
    $("register").addEventListener("click", processEntries);
    $("reset_form").addEventListener("click", resetForm);
    $("email_address").focus();
});
