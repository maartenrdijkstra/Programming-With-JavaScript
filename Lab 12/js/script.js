let i, h2, div, h2Elements, faqs;

let $ = function (id) {
    return document.getElementById(id);
};

let toggle = function (e) {
    h2 = e.currentTarget;
    div = h2.nextElementSibling;
    h2Elements = faqs.getElementsByTagName("faqs");
    for(i = 0; i < h2Elements.length; i += 1) {
        if (h2Elements[i] !== e.currentTarget) {
            h2Elements[i].removeAttribute("class");
            h2Elements[i].nextElementSibling.removeAttribute("class");
        }
    }
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");
    }
};

window.addEventListener("load", function () {
    faqs = $("faqs");
    h2Elements = faqs.getElementsByTagName("h2");
    for (i = 0; i < h2Elements.length; i += 1) {
        h2Elements[i].addEventListener("click", toggle);
    }
    h2Elements[0].firstChild.focus();
        });
