/*eslint-env browser*/

let $ = function (id) {
    return document.getElementById(id);
};

let createRollover = function(imgTag, secondUrl, secondAlt) {
    // STORE FIRST IMAGE INFO
    let firstUrl, firstAlt, image;

    firstUrl = imgTag.src;
    firstAlt = imgTag.alt;

    // PRELOAD SECOND IMAGE
    image = new Image();
    image.src = secondUrl;

    // CREATE EVENT HANDLERS
    let mouseover = function () {
        imgTag.src = secondUrl;
        imgTag.alt = secondAlt;
    }

    let mouseout = function () {
        imgTag.src = firstUrl;
        imgTag.alt = firstAlt;
    }

    evt.attach(imgTag, "mouseover", mouseover);
    evt.attach(imgTag, "mouseout", mouseout);
};

window.addEventListener("load", function () {
    createRollover($("img1"), "../Lab%2019/images/wakeboard.jpg", "Zak wakeboards with his boat!");
    createRollover($("img2"), "../Lab%2019/images/race.jpg", "Zak stays active so he can race.");

})
